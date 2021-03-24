create sequence iteration;
create table dashboard(
	iter int default nextval('iteration') primary key,
	tconst int,
	nconst int,
	dconst int,
	uconst int,
	tgoals int,
	ngoals int,
	dgoals int,
	ugoals int,
	tactors int,
	nactors int,
	dactors int,
	uactors int
);

insert into dashboard(tconst,nconst,dconst,uconst,tgoals,ngoals,dgoals,ugoals,tactors,nactors,dactors,uactors)
values (19,19,0,19,34,34,0,34,4,4,0,4);

alter sequence iteration restart with x;