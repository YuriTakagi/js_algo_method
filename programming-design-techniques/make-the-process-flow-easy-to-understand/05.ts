/*
カメのアルルは、次の問題を考えています。

カメのイルルは 2 人の名前を聞きましたが、その一部を忘れてしまいました。

次の 2 つの文字列は、2 人の名前についてのイルルの記憶を再現したものです。

イルルが覚えている文字はその文字で、覚えていない文字は ? で表しています。

kame??ar?ru

??ma?oul?ru

イルルの記憶のもとで、2 人の名前の文字が必ず異なるといえる位置は何文字目ですか。

そのような位置をすべて求め、小さい順に改行区切りで出力するプログラムを作成してください。

ただし、先頭の文字を 0 文字目と数えます。

この問題に対し、アルルは次のように考えました。

それぞれの位置について、

どちらかの文字が ? であるときは、文字が必ず異なるとはいえない。

どちらの文字も ? でなく、文字が異なっているときに限り、その位置を出力すればよい。

次の擬似コードは、アルルが実際に書いたものです。

str: name1 = "kame??ar?ru"
str: name2 = "??ma?oul?ru"
for (初期値: index = 0, 条件: index < (name1 の長さ), 更新: index += 1)
    if (name1[index] != '?')
        if (name2[index] != '?')
            if (name1[index] != name2[index])
                print(index)
            endif
        endif
    endif
endfor
このコードでは、if 文の深いネストの中で処理を行っており、読みづらいです。

continue 文を利用し、このプログラムと同じ動作をする読みやすいプログラムを作成してください。

*/

const name1 = "kame??ar?ru";
const name2 = "??ma?oul?ru";
for (let i = 0; i < name1.length; i++) {
  if (name1[i] === "?") {
    continue;
  }
  if (name2[i] === "?") {
    continue;
  }
  if (name1[i] !== name2[i]) {
    console.log(i)
  }
}
