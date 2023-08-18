SELECT
    prefectures.name AS "都道府県名",
    (
          SELECT regions.name
          FROM regions
          WHERE regions.id == prefectures.region_id
    ) AS "地方名"
FROM
    prefectures;

