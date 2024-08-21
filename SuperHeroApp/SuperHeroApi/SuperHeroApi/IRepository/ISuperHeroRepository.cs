namespace SuperHeroApi.IRepository
{
    public interface ISuperHeroRepository
    {
        IQueryable<SuperHero> GetAllSuperHeroQueryable();

        List<SuperHero> GetAllSuperHero();
        SuperHero GetById(int id);
        int Add(SuperHero superHero);
        int Update(SuperHero superHero);
        int Delete(int Id);

    }
}
