#!/bin/sh

sleep 90s

# Aguarda o Kafka Connect estar pronto para aceitar requisições.
echo "Aguardando o Kafka Connect estar pronto..."
while [ $(curl -s -o /dev/null -w %{http_code} http://kafka-connect:8083/connectors) -ne 200 ]; do
  sleep 5
done
echo "Kafka Connect está pronto. Criando conectores..."

# Cria o conector do Debezium para o SQL Server
curl -X POST -H "Content-Type: application/json" --data '{
  "name": "sqlserver-connector",
  "config": {
    "connector.class": "io.debezium.connector.sqlserver.SqlServerConnector",
    "tasks.max": "1",
    "database.hostname": "sqlserver",
    "database.port": "1433",
    "database.user": "sa",
    "database.password": "YourStrongPassword!",
    "database.names": "cdc_db",
    "database.encrypt": "false",  
    "database.trustServerCertificate": "true",
    "topic.prefix": "sql-cdc",
    "schema.include": "dbo",
    "table.include": "dbo.MinhaTabela",
    "snapshot.mode": "initial",
    "name": "sqlserver-connector",
    "schema.history.internal.kafka.bootstrap.servers": "kafka:9092",
    "schema.history.internal.kafka.topic": "schema-changes-sqlserver-topic",
    "transforms": "unwrap",
    "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",
    "transforms.unwrap.drop.tombstones": "true"    
  }
}' http://kafka-connect:8083/connectors

# Cria o conector do MongoDB para replicar os dados do Kafka
curl -X POST -H "Content-Type: application/json" --data '{
  "name": "mongodb-sink-connector",
  "config": {
    "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",
    "tasks.max": "1",
    "topics.regex": "sql-cdc\\.cdc_db\\.dbo\\.MinhaTabela",
    "connection.uri": "mongodb://mongodb:27017",
    "database": "cdc_db",
    "collection": "minha_tabela",
    "writemodel.strategy": "com.mongodb.kafka.connect.sink.writemodel.strategy.ReplaceOneDefaultStrategy"
  }
}' http://kafka-connect:8083/connectors

echo "Conectores criados com sucesso!"
