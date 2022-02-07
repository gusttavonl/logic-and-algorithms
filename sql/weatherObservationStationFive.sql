select city,
  length(city)
from station
order by length(city) DESC,
  city ASC
fetch first row only;
select city,
  length(city)
from station
order by length(city) asc,
  city asc
fetch first row only;