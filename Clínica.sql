create table animal(
animal_id serial primary key,
	nome varchar (30),
	especie varchar (15),
	raca varchar (20),
	dono varchar (40)
);

create table veterinarios(
veterinario_id serial primary key,
        telefone varchar (11),
	nome varchar (30),
	especialidade varchar (40),
	
);

create table consultas(
consulta_id serial primary key,
	data_consulta varchar (10),
	animal_id INT REFERENCES animais (animal_id),
	veterinario_id INT REFERENCES veterinarios (veterinario_id),
	diagnostico TEXT
);

create table medicamento(
medicamento_id serial primary key,
	nome varchar (30),
	dosagem varchar (30),
        descricao TEXT
);