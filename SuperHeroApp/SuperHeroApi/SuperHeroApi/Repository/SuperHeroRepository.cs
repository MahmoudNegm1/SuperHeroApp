using Microsoft.EntityFrameworkCore;
using SuperHeroApi.Data;
using SuperHeroApi.IRepository;

namespace SuperHeroApi.Repository
{
    public class SuperHeroRepository : ISuperHeroRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public SuperHeroRepository(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public int Add(SuperHero superHero)
        {
            var entity = _dbContext.SuperHeros.Add(superHero);
            var result = _dbContext.SaveChanges();

            return result;

        }

        public int Delete(int Id)
        {
            var entity = _dbContext.SuperHeros.Find(Id);
            _dbContext.SuperHeros.Remove(entity);
            var result = _dbContext.SaveChanges();

            return result;

        }

        public List<SuperHero> GetAllSuperHero()
        {
            var superHeroList = _dbContext.SuperHeros.ToList();
            return superHeroList;

        }

        public IQueryable<SuperHero> GetAllSuperHeroQueryable()
        {
            var superHeroList = _dbContext.SuperHeros.AsQueryable();
            return superHeroList;
        }

        public SuperHero GetById(int id)
        {
            var entity = _dbContext.SuperHeros.Find(id);
            return entity;
        }

        public int Update(SuperHero superHero)
        {

            _dbContext.SuperHeros.Attach(superHero);

            _dbContext.Entry(superHero).State = EntityState.Modified;

            return _dbContext.SaveChanges();

        }
    }
}
