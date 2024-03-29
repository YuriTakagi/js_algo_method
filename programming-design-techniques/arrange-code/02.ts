/*
カメのアルルは、次の問題を考えています。

1 から 5 までの整数からなるリスト numbers が与えられます。

numbers の中で最も多く登場する整数は何回現れるか出力してください。

アルルは整数の登場回数をカウントする配列を作り、その配列で最大の要素を出力すればよいと考えました。

次の擬似コードは、アルルが実際に書いたものです。

def int: get_max_count(int[]: numbers)
    int: count = [0, 0, 0, 0, 0, 0]
    for (初期値: i = 0, 条件: i < (numbers の要素数), 更新: i += 1)
        count[numbers[i]] += 1
    endfor
    int: max_count = 0
    for (初期値: i = 1, 条件: i <= 5, 更新: i += 1)
        if (count[i] > max_count)
            max_count = count[i]
        endif
    endfor
    return max_count

int[]: numbers = [3, 1, 4, 1, 5, 2, 2, 1]
print(get_max_count(numbers))
このコードの get_max_count() 関数では 2 つの処理がまとめて書かれており、処理の区切れを把握しづらいです。

そこで、アルルは空行を 1 行挿入して処理の区切れをわかりやすくしようと考えました。

次の選択肢のうち、空行を挿入する場所として最も適切な場所を選んでください。

<選択肢>

1.　2 行目 int: count = [0, 0, 0, 0, 0, 0] と 3 行目 for (初期値: ... の間

2.　5 行目 endfor と 6 行目 int: max_count = 0 の間

3.　6 行目 int: max_count = 0 と 7 行目 for (初期値: ... の間

4.　9 行目 max_count = count[i] と 10 行目 endif の間

*/

2