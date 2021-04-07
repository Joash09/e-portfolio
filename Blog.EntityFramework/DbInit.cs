using System;
using System.Linq;
using Blog.Core;

namespace Blog.EntityFramework{
				
				public static class DbInit {

								public static void Initialize(BlogDbContext context){

												if (context.BlogEntries.Any()){
																return;
												}

												var blogEntries = new BlogEntry[]
												{
																new BlogEntry{id=1, title="What I know about bonds", lastModified=new DateTime(2021, 4, 5), thumbnail=null, content="Story about bonds"},
																new BlogEntry{id=2, title="Machine Learning in the browser", lastModified=new DateTime(2021, 4, 5), thumbnail=null, content="Story about machine learning in the browser"}
												};

												context.BlogEntries.AddRange(blogEntries);
												context.SaveChanges();

								}
				}
}
