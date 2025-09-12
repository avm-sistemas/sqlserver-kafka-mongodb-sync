using Microsoft.AspNetCore.Mvc;
using Solucao.Application.Services;
using Solucao.Application.DTOs;

namespace Solucao.Api.Controllers
{
    [ApiController]
    [Route("api/minha-tabela")]
    public class MinhaTabelaController : ControllerBase
    {
        private readonly MinhaTabelaService _service;

        public MinhaTabelaController(MinhaTabelaService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MinhaTabelaDto>>> GetAll()
        {
            var registros = await _service.GetAllAsync();
            return Ok(registros);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MinhaTabelaDto>> GetBySqlServerId(int id)
        {
            var registro = await _service.GetBySqlServerIdAsync(id);
            if (registro == null)
            {
                return NotFound();
            }
            return Ok(registro);
        }
    }
}
