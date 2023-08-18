UPDATE prefectures SET name = "茨城県" WHERE name = "茨木県";
UPDATE prefectures SET name = "鳥取県" WHERE name = "取鳥県";
SELECT * FROM prefectures;

-- 別解
/*
UPDATE prefectures
SET name = CASE
              WHEN name = "茨木県" THEN "茨城県"
              WHEN name = "取鳥県" THEN "鳥取県"
              ELSE name
           END
WHERE name IN ("茨木県", "取鳥県");
*/

-- 解説
/*
UPDATE prefectures:
prefecturesテーブルのレコードを更新することを指示しています。

SET name = CASE ... END:
SET句は、更新するカラムとその新しい値を指定します。
ここでは、nameカラムの値をCASE文を使用して条件に基づいて更新しています。

CASE文:
CASE文は、複数の条件を指定して、それぞれの条件に応じた値を返すための制御構造です。
以下のように動作します：
WHEN name = "茨木県" THEN "茨城県": nameカラムの値が"茨木県"の場合、その値を"茨城県"に更新します。
WHEN name = "取鳥県" THEN "鳥取県": nameカラムの値が"取鳥県"の場合、その値を"鳥取県"に更新します。
ELSE name: 上記の条件のいずれも満たされない場合、nameカラムの値は変更されず、現在の値がそのまま保持されます。
WHERE name IN ("茨木県", "取鳥県"):

WHERE句は、更新するレコードを絞り込む条件を指定します。
IN演算子を使用して、nameカラムの値が"茨木県"または"取鳥県"のレコードのみを対象としています。
*/
