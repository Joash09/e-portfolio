using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.EntityFramework.Migrations
{
    public partial class Thumbnail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "thumbnailLink",
                table: "BlogEntries",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "thumbnailLink",
                table: "BlogEntries");
        }
    }
}
