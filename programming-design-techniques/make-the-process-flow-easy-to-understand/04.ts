/*
カメのアルルは、次の問題を考えています。

次の文字列で、小文字の s が現れる位置は何文字目ですか。

先頭から順に 10 個の位置を求め、改行区切りで出力するプログラムを作成してください。

ただし、先頭の文字 (L) を 0 文字目と数え、空白文字 ( ) も 1 文字として扱います。

Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum
なお、正しい出力において、最初の値は 8、最後の値は 189 となります。

次の擬似コードは、アルルが実際に書いたものです。

str: sentence = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
char: target = 's'  // 検索する文字
int: max_count = 10 // 検索する最大個数
int: count = 0      // 現在見つかった個数
for (初期値: index = 0, 条件: index < (sentence の長さ), 更新: index += 1)
    if (count < max_count)
        if (sentence[index] == target)
            print(index)
            count += 1
        endif
    endif
endfor
このコードでは、if 文の深いネストの中で処理を行っており、読みづらいです。

このプログラムと同じ動作をする読みやすいプログラムを、次の方針で作成してください。

これ以上処理を行う必要がないとわかった時点で、break により処理を打ち切る。
*/

const sentence =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
const target = "s";
const maxCount = 10;
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (count >= maxCount) {
    break;
  }
  if (sentence[i] === target) {
    count += 1;
    console.log(i);
  }
}
