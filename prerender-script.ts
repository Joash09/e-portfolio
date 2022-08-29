var error = false;

function sleep(miliseconds) {
    console.log(`Sleeping for ${miliseconds} ms`);
    if (miliseconds == 0)
        return Promise.resolve();
    return new Promise(resolve => setTimeout(() => resolve(), miliseconds))
}

async function run() {
    try {

        console.log("Running Angular server");
        var proc = require('child_process').spawn('ng', ['serve', '--port', '3000']);
        await sleep(20000)

        console.log("Running prerender");
        var prerender = require('child_process').spawn('npm', ['run', 'prerender']);
        var prerenderTimeoutSeconds = 240;
        var timeoutObject;
        var timeoutResolve;
        var timeoutReject;
        var timeout = new Promise((resolve, reject) => {
            timeoutResolve = resolve;
            timeoutReject = reject;
            timeoutObject = setTimeout(() => {
                console.log('Timed out, killing prerender');
                try {
                    prerender.kill("SIGKILL")
                    reject(Error("Timed out running prerender"))
                } catch (e) {
                    console.error(e)
                    reject(Error('Cannot kill prerender'));
                }
            }, prerenderTimeoutSeconds * 1000)
        });

        prerender.stdout.on('data', (data) => {
            console.log(`prerender stdout: ${data}`);
        });

        prerender.stderr.on('data', (data) => {
            console.error(`prerender stderr: ${data}`);
        });

        prerender.on('close', (code) => {
            clearTimeout(timeoutObject);
            console.log(`prerender exited with code ${code}`)
            if (code === 0) {
                timeoutResolve()
            } else {
                timeoutReject(Error(`prerender exited with code ${code}`));
            }
        });

        await timeout

    } catch (err) {
        console.error(err);
        console.error(err.stack);
        error = true;
    } finally {
        if (proc) {
            console.log("Killing Angular server");
            var angularKilled = proc.kill("SIGKILL")
            console.log(`kill -9 on Angular success [${angularKilled}]`)
        }
    }
}

(async () => await run())();

if (error) {
    throw new Error("Exception during execution")
}
