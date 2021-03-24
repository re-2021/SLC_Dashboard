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
values (constraints,constraints,0,constraints,goals,goals,0,goals,actors,actors,0,actors);