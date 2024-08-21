using Microsoft.EntityFrameworkCore;

namespace SuperHeroApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<SuperHero> SuperHeros { get; set; }
    }
}
