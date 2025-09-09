# SQL Server Kafka MongoDB Sync

## Abstract

I created this solution to use the best of both worlds, the storage power of SQL Server and the read speed of MongoDB.

## Architecture

It was built in Docker with 7 application layers divided into 4 categories:

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


## Results:

### Docker:
<img width="1326" height="456" alt="image" src="https://github.com/user-attachments/assets/26ecb897-9b65-4daa-b7cd-cef09c58c68e" />

### SQL Server:
<img width="1196" height="801" alt="image" src="https://github.com/user-attachments/assets/db6010be-1659-4e23-a58a-21041750697f" />

### Kafka:
<img width="1917" height="826" alt="image" src="https://github.com/user-attachments/assets/f336784c-e96b-4c3b-aee8-d77e88880eec" />

### Mongodb:
<img width="886" height="1007" alt="image" src="https://github.com/user-attachments/assets/accf3a9b-fbbe-432a-bffd-3348a5354bfa" />

