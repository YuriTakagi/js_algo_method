SELECT name AS "顧客名",
 SUM(amount) AS "合計金額"
FROM ledger
WHERE date BETWEEN "2022-08-08" AND "2022-08-14"
GROUP BY name
HAVING `合計金額` >= 5000;

-- 別解
/*
SELECT
    name AS "顧客名",
    SUM(amount) AS "合計金額"
FROM
    ledger
WHERE
    date BETWEEN "2022-08-08" AND "2022-08-14"
GROUP BY
    name
HAVING
    SUM(amount) >= 5000;
*/