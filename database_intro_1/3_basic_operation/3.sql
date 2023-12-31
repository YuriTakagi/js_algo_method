SELECT id, name, subject, score,
CASE
    WHEN score BETWEEN 90 AND 100 THEN "秀"
    WHEN score BETWEEN 80 AND 89 THEN "優"
    WHEN score BETWEEN 65 AND 79 THEN "良"
    WHEN score BETWEEN 50 AND 64 THEN "可"
    ELSE "不可"
END AS "評価"
FROM grades;

-- 別解
/*
SELECT
    id,
    name,
    subject,
    score,
    CASE
        WHEN score BETWEEN 90 AND 100 THEN "秀"
        WHEN score BETWEEN 80 AND 89 THEN "優"
        WHEN score BETWEEN 65 AND 79 THEN "良"
        WHEN score BETWEEN 50 AND 64 THEN "可"
        ELSE "不可"
    END AS "評価"
FROM
    grades;

*/