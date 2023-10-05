using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class group
    {
        public group(){
            
        }
        public group(string name){
            Name = name;
        }

        [Key]
        public string Name { get; set; }
        public ICollection<Connection> Connections { get; set; } = new List<Connection>();
    }
}