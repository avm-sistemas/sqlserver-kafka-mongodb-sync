# ----- Fase 1: Build (Construção) -----
# Usa uma imagem do SDK do .NET para compilar e publicar o projeto
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Define o diretório de trabalho no contêiner
WORKDIR /src

# Copia os arquivos de solução e projeto e restaura as dependências
COPY ["src/MinhaTabela.Api/MinhaTabela.Api.csproj", "src/MinhaTabela.Api/"]
COPY ["src/MinhaTabela.Application/MinhaTabela.Application.csproj", "src/MinhaTabela.Application/"]
COPY ["src/MinhaTabela.Domain/MinhaTabela.Domain.csproj", "src/MinhaTabela.Domain/"]
COPY ["src/MinhaTabela.Infrastructure/MinhaTabela.Infrastructure.csproj", "src/MinhaTabela.Infrastructure/"]
RUN dotnet restore "src/MinhaTabela.Api/MinhaTabela.Api.csproj"

# Copia o código-fonte restante e executa o build
COPY . .
WORKDIR "/src/src/MinhaTabela.Api"
RUN dotnet build "MinhaTabela.Api.csproj" -c Release -o /app/build

# Publica a aplicação para a pasta de destino
FROM build AS publish
RUN dotnet publish "MinhaTabela.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# ----- Fase 2: Final (Produção) -----
# Usa uma imagem runtime mais leve para executar a aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Expõe as portas que a aplicação usa (HTTP e HTTPS)
EXPOSE 8080
EXPOSE 8081

# Define a variável de ambiente para a porta HTTP
ENV ASPNETCORE_URLS=http://+:8080

# Comando para iniciar a aplicação
ENTRYPOINT ["dotnet", "MinhaTabela.Api.dll"]
