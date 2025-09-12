using MongoDB.Driver;
using Solucao.Domain.Interfaces;
using Solucao.Infrastructure.Repositories;
using Solucao.Application.Services;

var builder = WebApplication.CreateBuilder(args);

// Adicione serviços ao contêiner.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // Adiciona o gerador de serviços do Swagger

// Configure e injete o MongoDB
builder.Services.AddSingleton<IMongoClient>(s => new MongoClient(
    builder.Configuration.GetConnectionString("MongoDbConnection")
));

builder.Services.AddScoped<IMongoDatabase>(s => {
    var client = s.GetRequiredService<IMongoClient>();
    return client.GetDatabase(builder.Configuration["DatabaseName"]);
});

// Injete o repositório e o serviço da aplicação
builder.Services.AddScoped<IMinhaTabelaRepository, MinhaTabelaRepository>();
builder.Services.AddScoped<MinhaTabelaService>();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "API de Leitura do MongoDB",
        Version = "v1",
        Description = "API RESTful para consultar dados da tabela MinhaTabela replicados do SQL Server.",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact
        {
            Name = "AVM Sistemas",
            Email = "andre@avmsistemas.net"
        }
    });
});

var app = builder.Build();

// Configure o pipeline de requisições HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        // A URL da sua API (verifique o launchSettings.json)
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Minha API de CRUD V1");

        // Injete o CSS personalizado na página
        c.InjectStylesheet("/custom-swagger.css");
    });
}

app.UseStaticFiles();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();