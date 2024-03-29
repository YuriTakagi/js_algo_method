/*
同じ処理を何度も繰り返し書くと、わかりにくいプログラムになってしまいます。

プログラムを書く際に「同じものを何度も繰り返さない」という原則を DRY 原則 といいます。

なお、DRY とは Don’t Repeat Yourself の略です。

例として、次の擬似コードを考えてみましょう。

int: answer = 1

answer = answer * 1
answer = answer * 2
answer = answer * 3
answer = answer * 4
answer = answer * 5
answer = answer * 6
answer = answer * 7
answer = answer * 8
answer = answer * 9
answer = answer * 10

print(answer)
このコードは、変数 answer に数を掛ける処理を何度も書いており、冗長です。

for 文を用いることで、同じ処理をまとめ、簡潔に書くことができます。

int: answer = 1

for (初期値: i = 1, 条件: i <= 10, 更新: i += 1)
    answer *= i
endfor

print(answer)
ほかにも、何度も登場する値や処理を、それぞれ変数や関数を利用してまとめることもできます。

問題文
(1)
DRY 原則にしたがって同じものをまとめるには、どのような方法が考えられるでしょうか。選択肢のうち、最も適切でないものを 1 つ選んでください。

<選択肢>

1.　for 文  2.　関数  3.　クラス  4.　コメント

(2)
DRY 原則にしたがって同じものをまとめることは、どのような目的で行われるでしょうか。選択肢のうち、最も適切でないものを 1 つ選んでください。

<選択肢>

1.　プログラムを読みやすくするため。

2.　プログラムの実行速度を向上させるため。

3.　一度書いたプログラムの再利用をしやすくするため。

4.　誤りの修正や仕様の変更をしやすくするため。

*/

4
2