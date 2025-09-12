using Solucao.Application.DTOs;
using Solucao.Domain.Interfaces;

namespace Solucao.Application.Services
{
    public class MinhaTabelaService
    {
        private readonly IMinhaTabelaRepository _repository;

        public MinhaTabelaService(IMinhaTabelaRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<MinhaTabelaDto>> GetAllAsync()
        {
            var registros = await _repository.GetAllAsync();
            // Mapeie a entidade para o DTO
            return registros.Select(r => new MinhaTabelaDto
            {
                _id = r._id,
                ID = r.ID,
                Nome = r.Nome,
                Descricao = r.Descricao,
                DataCriacao = r.DataCriacao
            });
        }

        public async Task<MinhaTabelaDto> GetBySqlServerIdAsync(int sqlServerId)
        {
            var registro = await _repository.GetBySqlServerIdAsync(sqlServerId);
            if (registro == null)
            {
                return null;
            }
            return new MinhaTabelaDto
            {
                _id = registro._id,
                ID = registro.ID,
                Nome = registro.Nome,
                Descricao = registro.Descricao,
                DataCriacao = registro.DataCriacao
            };
        }
    }
}
