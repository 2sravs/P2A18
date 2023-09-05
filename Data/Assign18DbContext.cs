using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPIAssign18.Models;

namespace WebAPIAssign18.Data
{
    public class Assign18DbContext : DbContext
    {
        public Assign18DbContext (DbContextOptions<Assign18DbContext> options)
            : base(options)
        {
        }

        public DbSet<WebAPIAssign18.Models.Movie> Movie { get; set; } = default!;
    }
}
