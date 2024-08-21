using Microsoft.AspNetCore.Mvc;
using SuperHeroApi.IRepository;

namespace SuperHeroApi.Controllers
{
    [Route("api/SuperHero")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly ISuperHeroRepository _heroRepository;

        public SuperHeroController(ISuperHeroRepository heroRepository)
        {
            this._heroRepository = heroRepository;
        }
        [HttpGet]
        [Route("getAllSuperHeros")]
        public ActionResult getAllSuperHeros()
        {
            var lst = _heroRepository.GetAllSuperHero();
            return Ok(lst);
        }
        [HttpPost]
        [Route("AddSuperHero")]
        public ActionResult AddSuperHero(SuperHero superHero)
        {
            var result = _heroRepository.Add(superHero);
            return Ok(result);
        }
        [HttpGet]
        [Route("GetSuperHeroById")]
        public ActionResult GetSuperHeroById(int id)
        {
            var lst = _heroRepository.GetById(id);
            return Ok(lst);
        }
        [HttpPut]
        [Route("EditSuperHero")]
        public ActionResult EditSuperHero(SuperHero superHero)
        {
            var hero = _heroRepository.Update(superHero);
            return Ok(hero);
        }


    }
}
