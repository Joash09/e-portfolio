using Blog.EntityFramework;

namespace Blog.Application
{
    public class BlogDbService{
				
				private readonly BlogDbContext _context;

				public BlogDbService(BlogDbContext context){
								_context = context;
				}

				// SQL Queries 
    }

		public class FrontPageBlogInfoDTO{
				string title {get; set;}
				string dateModified { get; set;}
		}

		public class BlogEntryDTO{
				string title {get; set;}
				string content {get; set;}
		}
}
