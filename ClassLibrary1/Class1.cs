using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;

namespace ClassLibrary1
{
    public class Classmate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool HereToday { get; set; }
    }
    public class ClassRepository
    {
        private string _connectionString;
       private List<Classmate> classmates = new List<Classmate>();

        public ClassRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Classmate> GetClass()
        {           
            using (var context = new ClassContext(_connectionString))
            {
                return context.Class.ToList();
            }
        }

        public void Add(Classmate person)
        {
            using (var context = new ClassContext(_connectionString))
            {
                context.Class.Add(person);
                context.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            using (var context = new ClassContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand(
                    "DELETE Class WHERE Id = @id",
                    new SqlParameter("@id", id));
            }
        }
        public void TakeAttendance(IEnumerable<Classmate> c)
        {            
            using (var context = new ClassContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand(
                  "Update Class set hereToday = 0" );

                foreach (Classmate classmate in c)
                {
                    context.Database.ExecuteSqlCommand(
                   "Update Class set hereToday = 1 where id = @id",
                   new SqlParameter("@id", classmate.Id));

                }
            }
        }
        public List<Classmate> GetClassmatesHereToday()
        {
            using (var context = new ClassContext(_connectionString))
            {
                return context.Class.Where(c=> c.HereToday == true).ToList();
            }
        }
        public void ClearAll()
        {
            using (var context = new ClassContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand(
                  "Update Class set hereToday = 0");

            }
            }
        }
    public class ClassContext : DbContext
    {
        private string _connectionString;

        public ClassContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Classmate> Class { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlServer(_connectionString);
        }
    }
    public class ClassContextFactory : IDesignTimeDbContextFactory<ClassContext>
    {
        public ClassContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}AttendanceTaken.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new ClassContext(config.GetConnectionString("ConStr"));
        }
    }

}