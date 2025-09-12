using Moq;
using Xunit;
using Solucao.Application.Services;
using Solucao.Domain.Interfaces;
using Solucao.Domain.Entities;

public class MinhaTabelaServiceTests
{
    [Fact]
    public async Task GetBySqlServerIdAsync_Returns_Record_When_Found()
    {
        // Arrange
        var mockRepository = new Mock<IMinhaTabelaRepository>();
        var id = 1;
        var entity = new MinhaTabela { ID = id, Nome = "Test", Descricao = "Description" };
        mockRepository.Setup(repo => repo.GetBySqlServerIdAsync(id)).ReturnsAsync(entity);
        var service = new MinhaTabelaService(mockRepository.Object);

        // Act
        var result = await service.GetBySqlServerIdAsync(id);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(id, result.ID);
    }

    [Fact]
    public async Task GetBySqlServerIdAsync_Returns_Null_When_Not_Found()
    {
        // Arrange
        var mockRepository = new Mock<IMinhaTabelaRepository>();
        mockRepository.Setup(repo => repo.GetBySqlServerIdAsync(It.IsAny<int>())).ReturnsAsync((MinhaTabela)null);
        var service = new MinhaTabelaService(mockRepository.Object);

        // Act
        var result = await service.GetBySqlServerIdAsync(999);

        // Assert
        Assert.Null(result);
    }
}
