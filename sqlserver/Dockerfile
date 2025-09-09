# Choose ubuntu version
FROM mcr.microsoft.com/mssql/server:2019-latest

# Create app directory
WORKDIR /usr/src/app

# Copy initialization scripts
COPY . /usr/src/app
             
# Expose port 1433 in case accessing from other container
# Expose port externally from docker-compose.yml
EXPOSE 1433

# Run Microsoft SQL Server and initialization script (at the same time)
CMD /usr/src/app/entrypoint.sh
#CMD /bin/bash ./entrypoint.sh
