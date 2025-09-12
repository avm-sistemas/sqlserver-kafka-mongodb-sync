using Solucao.Domain.Entities;

namespace Solucao.Domain.Interfaces
{
    public interface IMinhaTabelaRepository
    {
        Task<MinhaTabela> GetByIdAsync(string id);
        Task<MinhaTabela> GetBySqlServerIdAsync(int sqlServerId);
        Task<IEnumerable<MinhaTabela>> GetAllAsync();
    }
}
