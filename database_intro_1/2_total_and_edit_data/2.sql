SELECT region AS "地方名", COUNT(name) AS "都道府県数", SUM(area) AS "総面積" FROM prefectures GROUP BY region ORDER BY `総面積` DESC;

-- コメント
-- SELECT region AS "地方名", COUNT(*) AS "都道府県数", SUM(area) AS "総面積" FROM prefectures GROUP BY region ORDER BY `総面積` DESC;

-- COUNT(name)はnameカラムにNULLがある場合、その行はカウントしない
-- COUNT(*)はnameカラムにNULLがあっても、その行をカウントする
