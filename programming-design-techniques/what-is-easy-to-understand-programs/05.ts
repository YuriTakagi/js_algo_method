/*
複雑なプログラムよりも、シンプルで単純なプログラムのほうがわかりやすいです。

これは「同じものを繰り返さない」という DRY 原則と並んで重要な考え方です。

プログラムを書く際には「シンプルなもののほうがよい」という原則を KISS 原則 といいます。

なお、KISS とは Keep It Simple Stupid の略です。「シンプルで愚鈍にする」などと訳されます。

例として、次の擬似コードを考えてみましょう。

int[]: numbers = [3, 1, 4, 1, 5]

# 数列の総和を求める
int: sum_numbers = 0
for (初期値: index = 0, 条件: index < (numbers の要素数), 更新: index += 1)
    sum_numbers += numbers[index]
endfor

print(sum_numbers)
このプログラムでは for 文を用いて配列 numbers に含まれる数値の総和を求めています。

しかし、sum() という関数で配列内の数値の総和を求めることができるとすれば、先ほどのプログラムは次のように書き直せます。

int[]: numbers = [3, 1, 4, 1, 5]

# 数列の総和を求める
int: sum_numbers = sum(numbers)

print(sum_numbers)
このように、既にある関数などを使用することでより簡潔なプログラムに書き直せます。

実際に、Python ではこの処理を行う sum() 関数が標準で用意されています。

問題文
次の (1)(2) の問いにそれぞれ答えてください。

(1)
次の選択肢のうち、KISS 原則にしたがってプログラムをシンプルに書き直す方法として最も適切でないものを 1 つ選んでください。

<選択肢>

1.　不必要に長いプログラムを短く書き直す。

2.　複雑な構文を用いてプログラムの処理をまとめる。

3.　既存のライブラリを用いてプログラムの処理を書き直す。

4.　無関係な処理を多く含む関数を避け、必要な処理だけを行う関数を利用する。

(2)
KISS 原則にしたがって同じものをまとめることは、どのような目的で行われるでしょうか。選択肢のうち、最も適切でないものを 1 つ選んでください。

<選択肢>

1.　プログラムを読みやすくするため。

2.　プログラムの実行速度を向上させるため。

3.　一度書いたプログラムの再利用をしやすくするため。

4.　誤りの修正や仕様の変更をしやすくするため。

*/

2
2