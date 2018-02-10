create table if not exists cars (
  id serial primary key,
  selling_price money,
  make varchar(100),
  model varchar(100),
  miles varchar(100),
  description varchar(1000),
  kb_price varchar(100),
  sold boolean,
  bought_for money,
  sale_platform varchar(100),
  date_bought date,
  date_sold date,
  budget money,
  money_spent money
);
create table if not exists pictures (
  id serial primary key,
  url text,
  car_id integer references cars(id) on delete cascade
);
