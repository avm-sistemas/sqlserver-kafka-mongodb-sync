using MongoDB.Driver;
using Solucao.Domain.Entities;
using Solucao.Domain.Interfaces;

namespace Solucao.Infrastructure.Repositories
{
    public class MinhaTabelaRepository : IMinhaTabelaRepository
    {
        private readonly IMongoCollection<MinhaTabela> _minhaTabelaCollection;

        public MinhaTabelaRepository(IMongoDatabase database)
        {
            _minhaTabelaCollection = database.GetCollection<MinhaTabela>("minha_tabela");
        }

        public async Task<MinhaTabela> GetByIdAsync(string id)
        {
            return await _minhaTabelaCollection.Find(doc => doc._id == id).FirstOrDefaultAsync();
        }

        public async Task<MinhaTabela> GetBySqlServerIdAsync(int sqlServerId)
        {
            return await _minhaTabelaCollection.Find(doc => doc.ID == sqlServerId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<MinhaTabela>> GetAllAsync()
        {
            return await _minhaTabelaCollection.Find(_ => true).ToListAsync();
        }
    }
}