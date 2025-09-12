using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Solucao.Domain.Entities
{
    public class MinhaTabela
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }

        public int ID { get; set; }
        public string? Nome { get; set; }
        public string? Descricao { get; set; }
        public long DataCriacao { get; set; }
    }
}
