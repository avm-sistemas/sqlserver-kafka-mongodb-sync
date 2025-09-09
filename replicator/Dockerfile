# Use uma imagem base leve que já inclua cURL
FROM alpine/curl

# Copia o script de replicação para o diretório de trabalho do contêiner.
# O primeiro argumento "." se refere ao contexto de construção (a pasta do Dockerfile).
# O segundo argumento "/" se refere à raiz do contêiner.
COPY . /

# Adiciona a permissão de execução ao script.
# Agora, o caminho é relativo à raiz.
RUN chmod +x /replicator.sh

# Define o ponto de entrada (entrypoint) que executa o script.
# O caminho é absoluto e não deixa margem para erros.
#ENTRYPOINT ["/replicator.sh"]
#CMD ls -l /
ENTRYPOINT /replicator.sh
