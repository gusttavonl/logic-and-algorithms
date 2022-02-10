SELECT DISTINCT CITY
FROM STATION
WHERE upper(SUBSTR(CITY, 1, 1)) NOT IN ('A', 'E', 'I', 'O', 'U')
  AND lower(SUBSTR(CITY, 1, 1)) NOT IN ('a', 'e', 'i', 'o', 'u');