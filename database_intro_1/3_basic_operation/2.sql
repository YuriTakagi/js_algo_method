-- 内陸県のデータを取得し、面積が大きい順に表示
WITH inland_prefectures AS (
    SELECT *
    FROM prefectures
    WHERE name IN ("栃木県", "群馬県", "埼玉県", "山梨県", "長野県", "岐阜県", "滋賀県", "奈良県")
)

SELECT *
FROM inland_prefectures
ORDER BY area DESC;
