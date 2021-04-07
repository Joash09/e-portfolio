using Microsoft.EntityFrameworkCore;
using Blog.Core;

namespace Blog.EntityFramework
{
    public class BlogDbContext : DbContext {

				// protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite("Data Source=Blog.db");
				public DbSet<BlogEntry> BlogEntries { get; set; }

				public BlogDbContext(DbContextOptions<BlogDbContext> options) : base(options){}

				// Manually Add Data to Start
				protected override void OnModelCreating(ModelBuilder modelBuilder){
						modelBuilder.Entity<BlogEntry>().ToTable("BlogEntries");
				}

		}

}
