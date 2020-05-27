begin;

create domain created as timestamp default CURRENT_TIMESTAMP;
create domain updated as timestamp default null;

create table experiences (
  id serial not null
  , description varchar(255)
  , text varchar(255)
  , created created
  , updated updated
) ;

comment on table experiences is 'experiences';
comment on column experiences.id is 'id';
comment on column experiences.description is 'description';
comment on column experiences.text is 'text';
comment on column experiences.created is 'created';
comment on column experiences.updated is 'updated';

commit;
