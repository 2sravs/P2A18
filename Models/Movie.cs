using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Transactions;

namespace WebAPIAssign18.Models
{
    [Table("Movie")]
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string Director { get; set; }
        public DateTime ReleaseDate { get; set;}
        public int rating { get; set; }

    }
}
