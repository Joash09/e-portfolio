using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;

using Blog.EntityFramework;

namespace Blog.Web.Host
{
				public class Program
				{
								public static void Main(string[] args)
								{
												var host = CreateHostBuilder(args).Build();
												// CreateDbIfNotExists(host);
												host.Run();
								}

								private static void CreateDbIfNotExists(IHost host){

												using (var scope = host.Services.CreateScope()){

																var services = scope.ServiceProvider;
																try{
																				var context = services.GetRequiredService<BlogDbContext>();
																				context.Database.EnsureCreated();
																				DbInit.Initialize(context);
																}
																catch (Exception ex){
																				var logger = services.GetRequiredService<ILogger<Program>>();
																				logger.LogError(ex, "An error occurred creating the DB.");
																}

												}
								}

								public static IHostBuilder CreateHostBuilder(string[] args) =>
												Microsoft.Extensions.Hosting.Host.CreateDefaultBuilder(args)
												.ConfigureWebHostDefaults(webBuilder =>
																				{
																				webBuilder.UseStartup<Startup>();
																				});
				}
}
