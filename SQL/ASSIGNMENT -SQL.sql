create database Aspire;
use Aspiren;
create table programmer (name varchar(8) not null,dob date not null,doj date not null,sex varchar(1) not null,prof1 varchar(8),prof2 varchar(8),salary int  not null);
create table software(S_name varchar(8) not null,title varchar(20) not null,dev_in varchar(8) not null,scost int,dcost int,sold int);
create table studies (st_name varchar(8) not null,splace varchar(9) not null,course varchar(5) not null,ccost varchar(5) not null);
insert into programmer values("somdutt",'1966-04-21','1992-04-21',"m","pascal","basic",3200);
insert into  software values("somdutt","parachutes","basic",399.5,6000,43);
insert into studies values("somdutt","sabhari","pgdca",4500);
insert into studies values("devdutt","bdps","dcs",5000);
-- QUERIES-I---------------------------------------------------------------------------------------------------------
-- 1
select avg(scost) from Software where dev_in="pascal";
-- 2
select name,date_format(from_days(datediff(now(),dob)),'%y')+0 AS Age from Programmer;
-- 3
select programmer.name, floor(datediff('2024-04-03', dob) / 365.25) as age
from programmer , studies 
where
programmer.name = studies.name and studies.course = 'dcs';
-- 4
select max(sold) from software;
-- 5
select name, dob from programmer 
where
month(dob) = 1;
-- 6
select min(ccost) from studies;
-- 7
select count(*)
from programmer , studies 
where
programmer.name = studies.name and studies.course = 'pgdca';
-- 8
select sum(scost*sold) from software
where
dev_in = 'c';
-- 9
select * from software 
where
name = 'ramesh';
-- 10
select count(*)
from studies
where splace = 'sabhari';
-- 11
select * from software
where
sold > 20000;
-- 12
select title, ceil(dcost / scost)
from software;
-- 13
select max(scost) from software
where
dev_in = 'basic';
-- 14
select *
from software
where sold * scost >= dcost;
-- 15
select count(*) from software
where
dev_in = 'dbase';
-- 16
select count(*)
from programmer , studies 
where
programmer.name = studies.name and studies.splace = 'paragathi';
-- 17
select count(*)
from programmer , studies 
where
programmer.name = studies.name 
and studies.ccost > 5000
and studies.ccost < 10000;
-- 18
select avg(ccost) from studies;
-- 19
select * from programmer
left join software
programmer.name = software.name
and software.dev_in = 'c';
-- 20
select count(*) from software
where dev_in in ('cobolt', 'pascal');
-- 21
select count(*) from software
where dev_in not in ('pascal', 'c');
-- 22
select max(extract(year from sysdate) - extract(year from dob))
from programmer
where sex = 'm';
-- 23
select avg(year(current_date) - year(dob))
from programmer
where sex = 'female';
-- 24
select name, 
timestampdiff(year, doj, curdate()) as experience
from programmer
order by experience desc;
-- 25
select name, dob from programmer
where month(dob) = month(curdate());
-- 26
select count(*) from programmer
where sex = 'female';
-- 27
select distinct prof1 as language from programmer
where sex = 'male'
union
select distinct prof2 from programmer
where sex = 'male';
-- 28
select avg(salary) from programmer;
-- 29
select count(*) from programmer
where salary between 2000 and 4000;
-- 30
select * from programmer
where prof1 and prof2 not in ('clipper', 'cobol', 'pascal');
-- 31
select count(*) from programmer
where sex = 'female'
and (prof1 = 'c' or prof2 = 'c')
and timestampdiff(year, dob, curdate()) > 24;
-- 32
select * from programmer
where timestampdiff(year, doj, curdate()) < 1;
-- 34
select * from programmer
where timestampdiff(year, doj, curdate()) = 2;
-- 35
select name, (dcost - (scost * sold)) from software
where dcost > (scost * sold);
-- 36
select * from software
where sold = 0;
-- 37
select scost from software
where name = 'mary';
-- 38
select distinct splace from studies;
-- 39
select count(distinct course) as number_of_courses
from studies;
-- 40
select name from programmer
where length(name) - length(replace(name, 'a', '')) = 2;
-- 41
select name from programmer
where length(name) <= 5;
-- 42
select count(*) from programmer
where sex = 'female'
and (prof1 = 'cobol' or prof2 = 'cobol')
and timestampdiff(year, doj, curdate()) > 2;
-- 43
select min(length(name)) as shortest_name_length from programmer;
-- 44
select avg(dcost) as average_development_cost from software
where dev_in = 'cobol';
-- 45
select name, sex, dob, doj from programmer
where day(last_day(dob)) = day(dob);
-- 46
select sum(salary) as total_salary_paid
from programmer
where sex = 'male' and (prof1 != 'cobol' and prof2 != 'cobol');
-- 47
select title, scost, dcost, (scost - dcost) as cost_difference
from software
order by cost_difference desc;
-- 49
select name, dob, doj from programmer
where month(dob) = month(doj);
-- 50
select title from software
where
length(title) - length(replace(title, ' ', '')) >= 1;

-- queries-ii

-- 1
select count(dev_in), dev_in from software
group by(dev_in);
-- 2
select count(name), name from software
group by(name);
-- 3
select count(case when sex = 'm' then 1 end) as male,
count(case when sex = 'f' then 1 end) as female from programmer;
-- 4

-- queries-iii

-- 1
select name from programmer
where
salary = max(salary)
and prof1 = 'c' or prof2 = 'c';
-- 2
select name from programmer
where
salary = max(salary)
and sex = 'f'
and prof1 = 'cobal' or prof2 = 'cobol';
-- 3
select name from programmer
where
salary = max(salary) group by prof1;
-- 4

-- 11
select course from studies
where
ccost = max(ccost);

select name, sex, dob, doj
from programmer
where day(last_day(dob)) = day(dob);

select sum(salary) as total_salary_paid
from programmer
where sex = 'male' and (prof1 != 'cobol' and prof2 != 'cobol');

select title, scost, dcost, (scost - dcost) as cost_difference
from software
order by cost_difference desc;

select name, dob, doj
from programmer
where month(dob) = month(doj);

select dev_in as language, count(dev_in) as number_of_packages
from software
group by dev_in;

select name, count(name) as number_of_packages
from software
group by name;

select dev_in as language, 
    max(scost) as costliest_package, 
    max(sold) as highest_selling
from software
group by dev_in;

select dev_in as language, 
    max(scost) as costliest_package, 
    max(sold) as highest_selling
from software
group by dev_in;

select year(dob) as birth_year, count(*) as number_of_people_born
from programmer
group by year(dob);

select year(doj) as join_year, count(*) as number_of_people_joined
from programmer
group by year(doj);

select month(doj) as join_month, count(*) as number_of_people_joined
from programmer
group by month(doj);

select prof1 as language, count(*) as count_prof1
from programmer
group by prof1;

select prof2 as language, count(*) as count_prof2
from programmer
group by prof2;

select floor(salary / 1000) as salary_group, count(*) as number_of_people
from programmer
group by salary_group;

select splace as institute, count(*) as number_of_people
from studies
group by splace;

select course, count(*) as number_of_people
from studies
group by course;

select dev_in as language, sum(dcost) as total_development_cost
from software
group by language;

select dev_in as language, sum(scost) as total_selling_cost
from software
group by language;

select name, sum(dcost) as total_development_cost
from software
group by name;

select name, sum(scost * sold) as total_sales_value
from software
group by name;

select name, count(*) as number_of_packages_developed
from software
group by name;

select name, dev_in as language, sum(scost * sold) as total_sales_cost
from software
group by name, language;

select 
    name, 
    max(scost) as costliest_package, 
    min(scost) as cheapest_package
from software
group by name;

select 
    dev_in as language, 
    avg(dcost) as average_development_cost,
    avg(scost) as average_cost,
    avg(sold) as average_selling_cost,
    avg(scost / sold) as average_price_per_copy
from software
group by language;

select 
    splace as institute_name, 
    count(distinct course) as number_of_courses,
    avg(ccost) as average_cost_per_course
from studies
group by institute_name;

select 
    splace as institute_name, 
    count(*) as number_of_students
from studies
group by institute_name;

select name, sex
from programmer;

select s.name as programmer_name, p.name as package_name
from programmer s
join software p on s.name = p.name;

select dev_in as language, count(*) as number_of_packages
from software
group by language;

select dev_in as language, count(*) as number_of_packages
from software
where dcost < 1000
group by language;

select dev_in as language, avg(scost - dcost) as average_difference
from software
group by language;

select 
    name,
    sum(scost) as total_selling_cost,
    sum(dcost) as total_development_cost,
    sum(scost) - sum(dcost) as amount_to_be_recovered
from software
group by name
having sum(scost) > sum(dcost);

select 
    max(salary) as highest_salary,
    min(salary) as lowest_salary,
    avg(salary) as average_salary
from programmer
where salary > 2000;

select name
from programmer
where prof1 = 'c'
order by salary desc
limit 1;

select name
from programmer
where sex = 'female' and prof1 = 'cobol'
order by salary desc
limit 1;

select prof1 as language, name
from programmer
group by language
having max(salary);

select name
from programmer
order by doj
limit 1;

select name
from programmer
order by doj desc
limit 1;

select prof1 as language
from programmer
group by language
having count(*) = 1;

select name
from programmer
where prof1 = 'dbase'
order by dob
limit 1;

select splace as institute_name, count(*) as number_of_students
from studies
group by institute_name
order by number_of_students desc
limit 1;

select name
from programmer
where prof1 = 'dbase'
order by dob
limit 1;

select name
from programmer
where sex = 'female' and salary > 3000
and prof1 not in ('c', 'c++', 'oracle', 'dbase')
and prof2 not in ('c', 'c++', 'oracle', 'dbase');

select course
from studies
order by ccost desc
limit 1;

select course
from studies
group by course
order by count(*) desc
limit 1;

select splace as institute_name, course
from studies
group by institute_name, course
having avg(ccost) < (select avg(ccost) from studies);

select splace as institute_name
from studies
group by institute_name
having max(ccost) = (select max(ccost) from studies);

select course
from studies
group by course
having count(*) < (select avg(count(*)) from studies group by course);

select splace as institute_name
from studies
where course in (
    select course
    from studies
    group by course
    having count(*) < (select avg(count(*)) from studies group by course)
);

select course
from studies
group by course
having abs(avg(ccost) - (select avg(ccost) from studies)) <= 1000;

select name
from software
order by dcost desc
limit 1;

select name
from software
order by scost asc
limit 1;

select name
from software
order by sold asc
limit 1;

select dev_in as language
from software
order by (scost * sold) desc
limit 1;

select sold
from software
order by (scost - dcost) asc
limit 1;

select name
from software
where dev_in = 'pascal'
order by scost desc
limit 1;

select dev_in as language
from software
group by language
order by count(*) desc
limit 1;

select name
from software
group by name
order by count(*) desc
limit 1;

select name
from software
order by scost desc
limit 1;

select name
from software
group by name
having sum(sold) < (select avg(sold) from software);

select p.name
from programmer p
join (
    select max(salary) as max_salary_male
    from programmer
    where sex = 'male'
) as max_salary_male
on p.sex = 'female' and p.salary > max_salary_male;

select prof1 as language
from programmer
group by language
order by count(*) desc
limit 1;

select name
from software
group by name
having sum(scost) > (2 * sum(dcost));

select p.name as programmer_name, s.language, min(s.scost) as cheapest_package_cost
from programmer p
join software s on p.name = s.name
group by p.name, s.language;

select name
from programmer
where sex = 'male' and dob = (select min(dob) from programmer where sex = 'male' and year(dob) = 1965);

select name, max(dev_in) as highest_selling_language, min(dev_in) as lowest_selling_language
from software
group by name;

select name
from programmer
where sex = 'female' and year(doj) = 1992
order by dob asc
limit 1;


select year(dob) as birth_year
from programmer
group by birth_year
order by count(*) desc
limit 1;

select month(doj) as join_month
from programmer
group by join_month
order by count(*) desc
limit 1;

select prof1 as language
from programmer
group by language
order by count(*) desc
limit 1;

select name
from programmer
where sex = 'male'
and salary < (select avg(salary) from programmer where sex = 'female');

select *
from programmer
where salary in (
    select salary
    from programmer
    group by salary
    having count(*) > 1
);

select *
from software
where name in (
    select name
    from programmer
    where sex = 'male' and salary > 3000
);

select *
from software
where dev_in = 'pascal' and name in (
    select name
    from programmer
    where sex = 'female'
);

select *
from programmer
where year(doj) < 1990;

select *
from software
where dev_in = 'c' and name in (
    select name
    from programmer
    where sex = 'female' and splace = 'pragathi'
);

select p.name as programmer_name, s.splace as institute, count(*) as number_of_packages, sum(s.sold) as total_copies_sold, sum(s.sold * s.scost) as total_sales_value
from programmer p
join software s on p.name = s.name
group by p.name, s.splace;

select *
from software
where dev_in = 'dbase' and name in (
    select name
    from programmer
    where sex = 'male' and splace = (
        select splace
        from studies
        group by splace
        order by count(*) desc
        limit 1
    )
);

select *
from software
where name in (
    select name
    from programmer
    where (sex = 'male' and year(dob) < 1965) or (sex = 'female' and year(dob) > 1975)
);

select *
from software
where dev_in not in (
    select prof1
    from programmer
    union
    select prof2
    from programmer
);

select *
from software
where dev_in not in (
    select prof1
    from programmer
    union
    select prof2
    from programmer
);

select *
from software
where name in (
    select name
    from programmer
    where sex = 'male' and splace = 'sabhari'
);

select name
from programmer
where name not in (
    select distinct name
    from software
);

select sum(dcost) as total_cost
from software
where name in (
    select name
    from programmer
    where splace = 'apple'
);

select name
from programmer
group by doj
having count(*) > 1;

select name
from programmer
group by prof2
having count(*) > 1;

select splace as institute, sum(sold * scost) as total_sales_value
from software
group by institute;

select splace as institute
from studies
where name in (
    select name
    from software
    order by scost desc
    limit 1
);

select language
from (
    select prof1 as language from programmer
    union
    select prof2 from programmer
) as languages
where language not in (
    select dev_in
    from software
);

select p.name as programmer_name, p.salary, s.course
from programmer p
join software s on p.name = s.name
where s.sold = (
    select max(sold)
    from software
);

select p.name as programmer_name, s.ccost / p.salary as months_to_recover_cost
from programmer p
join studies s on p.name = s.name;

select *
from software
where name in (
    select name
    from programmer
    where year(curdate()) - year(doj) < 3
);

select avg(p.salary) as average_salary
from programmer p
join software s on p.name = s.name
group by p.name
having sum(s.sold * s.scost) > 50000;

select count(*)
from software
where name in (
    select name
    from studies
    where ccost = (
        select min(ccost)
        from studies
    )
);

select count(*)
from software
where name = (
    select name
    from software
    order by scost asc
    limit 1
);

select s.splace as institute
from studies s
join software sw on s.name = sw.name
where sw.name = (
    select name
    from software
    order by scost asc
    limit 1
);

select count(*)
from software
where name in (
    select name
    from programmer
    where sex = 'female' and salary > (
        select max(salary)
        from programmer
        where sex = 'male'
    )
);

select count(*)
from software
where name in (
    select name
    from programmer
    where splace = 'bdps'
    order by timestampdiff(year, doj, curdate()) desc
    limit 1
);

select s.name as programmer_name, st.splace as institute
from studies st
left join software s on st.name = s.name
union
select p.name as programmer_name, st.splace as institute
from programmer p
left join studies st on p.name = st.name
where p.name not in (
    select name
    from software
);

select prof1 as proficiency, count(*) as number_of_programmers, (
    select count(*)
    from software
    where dev_in = prof1
) as number_of_packages_developed
from programmer
group by prof1;

select name, count(*) as number_of_packages_developed
from software
group by name;

select p.*
from programmer p
join studies s on p.name = s.name
where s.splace = 's.s.i.l';
