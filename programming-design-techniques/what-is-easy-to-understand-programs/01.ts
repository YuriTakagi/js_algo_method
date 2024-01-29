/*
カメのアルルは、次の問題を考えています。

1 以上 10 以下の整数をすべて掛け合わせた数を出力するプログラムを作成してください。

アルルは、1 から 10 までの整数を順に 1 に掛ければよいと考えました。

次の擬似コードは、この考えのもとアルルが実際に書いたものです。

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

しかし、このコードは冗長で読みにくいです。

このプログラムと同じ動作をする、読みやすいプログラムを作成してください。
*/

let answer = 1;
for (let i = 1; i <= 10; i++) {
  answer *= i;
}
console.log(answer);
