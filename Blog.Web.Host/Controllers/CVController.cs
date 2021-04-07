using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace Blog.Web.Host.Controller{

				[ApiController]
				public class CVController : ControllerBase {

								public CVController(){}
								
								[HttpGet]
								[Route("controller/cv")]
								public FileContentResult Get(){

												var dataBytes = System.IO.File.ReadAllBytes("./wwwroot/CV_Joash.pdf");
												return new FileContentResult(dataBytes, "application/pdf");
								}

				}
}
