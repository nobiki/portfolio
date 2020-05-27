-- Project Name : portfolio
-- Date/Time    : 2020/05/27 17:43:55
-- Author       : nobiki
-- RDBMS Type   : PostgreSQL
-- Application  : A5:SQL Mk-2

/*
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
*/

-- experiences
--* RestoreFromTempTable
create table experiences (
  id serial not null
  , description varchar(255)
  , text varchar(255)
  , created timestamp default CURRENT_TIMESTAMP
  , updated timestamp default null
) ;

comment on table experiences is 'experiences';
comment on column experiences.id is 'id';
comment on column experiences.description is 'description';
comment on column experiences.text is 'text';
comment on column experiences.created is 'created';
comment on column experiences.updated is 'updated';

