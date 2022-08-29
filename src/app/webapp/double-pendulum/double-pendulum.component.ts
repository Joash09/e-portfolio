import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Engine, Render, Constraint, Mouse, MouseConstraint, Bodies, Composites, Composite, Body, Events, Vector, Runner, World} from 'matter-js';

@Component({
	selector: 'app-double-pendulum',
	templateUrl: './double-pendulum.component.html',
	styleUrls: ['./double-pendulum.component.css']
})
export class DoublePendulumComponent implements OnInit, OnDestroy {

	engine!: Engine;
	render!: Render;

	isRunning = false;
	isBrowser: boolean;

	constructor(
		@Inject(PLATFORM_ID) private _platformId: string,
		@Inject(DOCUMENT) private _document: Document) {
		this.isBrowser = isPlatformBrowser(this._platformId);
	}

	ngOnInit() { }

	ngOnDestroy() {

		if (this.isRunning) {
			this.stopSimulation();
			console.log('Destroyed');
		}
	}

	initDoublePendulum() {

		if (!this.isBrowser) return;

		// Set up the basic engine and render components
		this.engine = Engine.create();
		this.render = Render.create({
			element: this._document.getElementById('physicsRenderComponent') as HTMLElement,
			engine: this.engine,
			options: {
				width: 700,
				height: 600,
				wireframes: false
			}
		});
		this.engine.gravity.scale = 0.002;

		// Create group
		var group = Body.nextGroup(true),
			length = 200,
			width = 25;

		// Model the components of the pendulum using a stack (i.e. a stack of objects)
		// The stack is made up of rectangles
		// Double pendulum is modelled using two long rectangular bars
		const pendulum = Composites.stack(350, 160, 2, 1, -20, 0, function(x: any, y: any) {
			return Bodies.rectangle(x, y, 200, 25, {
				collisionFilter: { group: group },
				frictionAir: 0,
			});
		});

		// Chain the two rectangular bars together
		const chain = Composites.chain(pendulum, 0.5, 0, -0.5, 0, {
			stiffness: 0.9,
			length: 0,
			angularStiffness: 0.7
		});

		// Add the physical constraints to the pendulum
		Composite.add(pendulum, Constraint.create({
			bodyB: pendulum.bodies[0],
			pointB: { x: -200*0.42, y: 0},
			pointA: { x: pendulum.bodies[0].position.x - 200 * 0.42, y: pendulum.bodies[0].position.y },
			stiffness: 0.9,
		}));

		var lowerArm = pendulum.bodies[1];
		Body.rotate(lowerArm, -Math.PI * 0.3);

		// Add mouse constraints
		// This allows us to interact with the simulation through the mouse
		var mouse = Mouse.create(this.render.canvas);
		var mouseConstraint = MouseConstraint.create(this.engine, {
			mouse: mouse
		});

		// Add a sketch for the path travelled by the lower arm of the double pendulum
		var path: PathPoint[] = [];
		const self = this; // typescript gets confused when using this in nested class/function
		Events.on(this.render, 'afterRender', function() {
			path.unshift({
				position: Vector.clone(pendulum.bodies[1].position),
				speed: pendulum.bodies[1].speed
			});
			for (var i = 0; i < path.length; i += 1) {
				var point = path[i].position,
					speed = path[i].speed;

				var hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
				self.render.context.fillStyle = 'hsl(' + hue + ', 100%, 55%)';
				self.render.context.fillRect(point.x, point.y, 2, 2);
			}
		});

		// Finally add everything to the world and run
		Composite.add(this.engine.world, pendulum);
		Composite.add(this.engine.world, mouseConstraint);
		// World.add(engine.world, [chain, mouseConstraint]);

		this.isRunning = true;
		Render.run(this.render);
		Runner.run(this.engine);
	}

	stopSimulation(): void {

		if (!this.isBrowser) return;

		this.isRunning = false;
		Render.stop(this.render);
		World.clear(this.engine.world, false);
		Engine.clear(this.engine);
		this.render.canvas.remove();
		this.render.canvas = null as any;
		this.render.context = null as any;
		this.render.textures = {};
	}

}

export interface PathPoint {
    position: Vector
    speed: number,
}
