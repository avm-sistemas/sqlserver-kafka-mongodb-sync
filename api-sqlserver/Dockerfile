# ----- Fase 1: Build (Construção) -----
# Usa uma imagem do Node com a tag "alpine" para um tamanho menor
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração do projeto
# O 'package.json' e 'package-lock.json' são copiados primeiro
# para aproveitar o cache do Docker
COPY package*.json ./

# Instala todas as dependências do projeto
# Isso inclui as dependências de desenvolvimento, necessárias para o 'build'
RUN npm install

# Copia todo o código-fonte da sua aplicação para o contêiner
COPY . .

# Executa o comando de build do NestJS
RUN npm run build

# ----- Fase 2: Produção -----
# Usa uma imagem do Node mais leve, ideal para produção
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o código de produção da fase de 'builder' para esta nova imagem
# O '--from=builder' é o comando-chave para a estratégia de multi-stage build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expõe a porta em que a aplicação vai rodar (padrão do NestJS)
EXPOSE 3020

# Comando para iniciar a aplicação em modo de produção
CMD ["node", "dist/main"]
