create table usuario (
	id UUID primary key DEFAULT gen_random_uuid(),
	username TEXT not null,
	password TEXT not null
);

create table mensajes (
	envia_id UUID not null,
	recibe_id UUID not null,
	mensaje TEXT not null,
	fecha TIMESTAMPTZ DEFAULT now(),
	estado TEXT not null,
	foreign key (envia_id) references usuario(id) on delete cascade,
	foreign key (recibe_id) references usuario(id) on delete cascade
);

drop table mensajes;
drop table usuario;
