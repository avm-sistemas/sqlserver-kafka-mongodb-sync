-- Garante que o banco de dados 'cdc_db' existe
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'cdc_db')
BEGIN
    CREATE DATABASE cdc_db;
END
GO

USE cdc_db;
GO

-- Habilita o CDC no banco de dados
IF EXISTS(SELECT 1 FROM sys.databases WHERE name='cdc_db' AND is_cdc_enabled = 0)
BEGIN
    EXEC sys.sp_cdc_enable_db;
END
GO

-- Exemplo: Habilita o CDC em uma tabela chamada 'MinhaTabela'
IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'MinhaTabela' AND is_tracked_by_cdc = 1)
BEGIN
    -- Cria a tabela (se não existir)
    IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'MinhaTabela')
    BEGIN
        CREATE TABLE MinhaTabela (
            ID INT PRIMARY KEY,
            Nome VARCHAR(100),
            DataCriacao DATETIME DEFAULT GETDATE()
        );
    END
    -- Habilita o CDC para a tabela
    EXEC sys.sp_cdc_enable_table
        @source_schema = N'dbo',
        @source_name = N'MinhaTabela',
        @role_name = NULL;
END
GO
