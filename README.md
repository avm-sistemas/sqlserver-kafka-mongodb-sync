# SQL Server Kafka MongoDB Sync

## Abstract

I created this solution to use the best of both worlds, the storage power of SQL Server and the read speed of MongoDB.

## Architecture

It was built in Docker with 9 application layers divided into 5 categories:

I. Transactional Persistence Database:

   1. SQL Server

II. Fast Read Database:

   2. MongoDB

III. Synchronization:

   3. Zookeeper
   4. Kafka
   5. Kafka Connect
   6. Kafka UI

IV: Synchronization Configuration:

   7. Replicator

V: Restful Serivces:

   8. Restful API to SQL Server's CRUD (NestJs)
   9. Restful API to Mongodb's reader (NestJs)
   10. Restful API to Mongodb's reader (.NET 8)

## Clone & Run

```
> git clone https://github.com/avm-sistemas/sqlserver-kafka-mongodb-sync.git
> cd sqlserver-kafka-mongodb-sync
> docker-compose up --build -d --force-recreate
```

## Results:

### Docker:
<img width="1268" height="550" alt="image" src="https://github.com/user-attachments/assets/daec4647-30f9-4653-808b-1ba508c3059e" />

### SQL Server:
<img width="1196" height="801" alt="image" src="https://github.com/user-attachments/assets/db6010be-1659-4e23-a58a-21041750697f" />

### Kafka:
<img width="1917" height="826" alt="image" src="https://github.com/user-attachments/assets/f336784c-e96b-4c3b-aee8-d77e88880eec" />

### Mongodb:
<img width="886" height="1007" alt="image" src="https://github.com/user-attachments/assets/accf3a9b-fbbe-432a-bffd-3348a5354bfa" />

### API Restful SQL Server
<img width="1574" height="991" alt="image" src="https://github.com/user-attachments/assets/8c239fe3-6982-4ba8-952b-eeb82426f189" />

### API Restful MongoDB
<img width="1574" height="906" alt="image" src="https://github.com/user-attachments/assets/3508276c-c9e1-4b34-b0e6-ae912d841399" />

