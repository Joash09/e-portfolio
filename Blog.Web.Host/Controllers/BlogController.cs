using Blog.EntityFramework;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Web.Host.Controller {

				[ApiController]
				public class BlogDbController : ControllerBase {
								
								private readonly BlogDbContext _context;

								public BlogDbController(BlogDbContext context){
												_context = context;
								}

								[HttpGet]
								[Route("controller/blogs")]
								public JsonResult Get(){
												var result =  _context.BlogEntries.ToList();
												return new JsonResult(result);
								}

								[HttpGet]
								[Route("controller/blog/{id}")]
								public JsonResult Get(int id){
												var result = _context.BlogEntries.Where( x => x.id == id );
												return new JsonResult(result);	
								}
				}
}
