SELECT
	-- using MYSQL
	-- GROUP_CONCAT(CONCAT(`First name`, ' ', `Last name`) SEPARATOR ', ') AS full_names,
    -- using sqlite
    STRING_AGG(CONCAT(`First name`, ' ', `Last name`), ',') AS full_names,
    city,
    SUM(salary) AS total_salary
FROM
    employee
GROUP BY
    city;