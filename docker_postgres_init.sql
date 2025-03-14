CREATE USER dock WITH PASSWORD 'dock' CREATEDB;

CREATE DATABASE dock
    WITH
    OWNER = dock
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


GRANT ALL PRIVILEGES ON DATABASE dock TO dock;


CREATE DATABASE dock_test
    WITH
    OWNER = dock
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


GRANT ALL PRIVILEGES ON DATABASE dock_test TO dock;
