using System;

namespace Blog.Core
{
    public class BlogEntry {

				public int id { get; set; }
				public string title { get; set; }
				public DateTime lastModified { get; set; }
				public byte[] thumbnail { get; set; }
				public string content { get; set; }

    }
}
