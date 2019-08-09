using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClassLibrary1;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AttendanceTaken.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private string _connectionString;

        public ClassController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("getall")]
        public IEnumerable<Classmate> GetAll()
        {
            var repo = new ClassRepository(_connectionString);
            IEnumerable<Classmate> c = repo.GetClass();
            return c;
        }
        [HttpGet]
        [Route("getHereToday")]
        public IEnumerable<Classmate> GetHereToday()
        {
            var repo = new ClassRepository(_connectionString);
            IEnumerable<Classmate> c = repo.GetClassmatesHereToday();
            return c;

        }
        [HttpPost]
        [Route("add")]
        public Classmate Add(Classmate person)
        {
            var repo = new ClassRepository(_connectionString);
            repo.Add(person);
            return person;
        }
        [HttpPost]
        [Route("takeAttendance")]
        public void TakeAttendance(IEnumerable<Classmate> classmates)
        {
            var repo = new ClassRepository(_connectionString);
            repo.TakeAttendance(classmates);
        }
        [HttpGet]
        [Route("clearAll")]
        public IEnumerable<Classmate> ClearAll()
        {
            var repo = new ClassRepository(_connectionString);
            repo.ClearAll();
            return repo.GetClass();
        }
    }
}
