/*

変数や関数、クラスなどの命名の際、誤解を防ぐためによく用いられる命名の方法があります。

たとえば「ユーザを格納するリスト」を user と命名すると、「1 人のユーザを表す変数」に見えてしまいます。users と複数形にすることで、複数個のデータであると伝わりやすくなります。

このような命名の方法の例を以下に示します。

ブール型の変数や関数は is や has で始める。

例: 「削除されたかどうか」を表す変数は、deleted ではなく is_deleted と命名する。
ブール型の変数や関数は否定形でなく、肯定形にする。

例: 「無効かどうか」を表す変数 is_unable ではなく、「有効かどうか」を表す変数 is_enabled を作成する。
変数名は名詞に、関数名は動詞にする。

例: 「削除する」ための関数は、deletion ではなく delete と命名する。
個々の表現についても、よく用いられるものがあります。以下に例を示します。

値の上限・下限は、limit ではなく max, min を用いる。

値の範囲指定には、first, last を用いる。



次の Python コードには、上述した観点から適切でないと考えられる名前があります。それはどれか、選択肢から 1 つ選んでください。

class Tortoise:
    def __init__(self, name, age, favorite_foods):
        self.name = name
        self.age = age
        self.favorite_foods = favorite_foods
    def introduction(self):
        print(f"{self.name} は {self.age} 歳です。")
    def is_favorite_food(self, food):
        return (food in self.favorite_foods)

aruru = Tortoise("aruru", 5, ["水草", "バナナ", "キャベツ", "小魚"])
aruru.introduction()
print(aruru.is_favorite_food("チーズ"))
<選択肢>

1.　クラスの属性名 favorite_foods

2.　クラスのメソッド名 introduction

3.　クラスのメソッド名 is_favorite_food

4.　メソッド is_favorite_food の引数名 food

*/

2;
