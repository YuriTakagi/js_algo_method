/*
変数や関数、クラスなどの命名の際の記法には、次のようなものがあります。

snake_case: 単語をすべて小文字で書き、単語間を _ (アンダースコア) で区切る。

UpperCamelCase: 各単語の頭文字を大文字で書く。

lowerCamelCase: はじめの文字を除いて、各単語の頭文字を大文字で書く。

同じコードの中では、オブジェクトの種類ごとに記法を統一するとよいです。

たとえば、次のような命名規則が考えられます。

変数や関数は snake_case で、クラスは UpperCamelCase で書く。(★)
これにより、コードを読む際に名前からオブジェクトの種類がわかりやすくなります。

命名規則を決める際、プログラム言語の既存の慣習やコーディング規約に従うのもよいでしょう。

たとえば Python のコーディング規約である PEP8 は、上述の命名規則 (★) を採用しています。



次の Python コードには、命名規則 (★) に従っていない名前があります。それはどれか、選択肢から 1 つ選んでください。

class Tortoise:
    def __init__(self, name, favorite_food):
        self.name = name
        self.favorite_food = favorite_food
    def introduce(self):
        print(f"{self.name} は{self.favorite_food}が好きです。")

class Tortoise_English(Tortoise):
    def introduce(self):
        print(f"{self.name} likes {self.favorite_food}.")

aruru = Tortoise("aruru", "水草")
aruru.introduce()

iruru = Tortoise_English("iruru", "fish")
iruru.introduce()
<選択肢>

1.　クラス名 Tortoise_English

2.　クラスの属性名 favorite_food

3.　クラスのメソッド名 introduce

4.　クラスのインスタンス名 aruru

*/

1;
