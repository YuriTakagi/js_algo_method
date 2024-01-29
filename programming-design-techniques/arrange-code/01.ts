/*
内容は同じでも、見た目が整理されたコードは読みやすく、処理を把握しやすいです。

次の擬似コードは、コメントの位置が揃っていないためどこに何が書いてあるか把握しづらいです。

float: r = 10.0 // 円の半径
float: PI = 3.14 // 円周率の値
float: area = r * r * PI // 円の面積
print(area)
しかし、コメントの左端を揃えることでプログラム本体とコメントが分かれて、コードの意味を把握しやすくなります。

float: r = 10.0           // 円の半径
float: PI = 3.14          // 円周率の値
float: area = r * r * PI  // 円の面積
print(area)
問題文
カメのアルルは、次の問題を考えています。

1 から 15 までの整数について、それぞれ順番に次の処理をしてください。

ただし、各出力は改行で区切ってください。

その整数が 3 でも 5 でも割り切れるなら、FizzBuzz と出力する。

その整数が 3 で割り切れるが 5 で割り切れないなら、Fizz と出力する。

その整数が 5 で割り切れるが 3 で割り切れないなら、Buzz と出力する。

その整数が 3 でも 5 でも割り切れないなら、その整数を出力する。

次のコードは、アルルが実際に書いたコードです。

def string: fizz_buzz(int: N)
  if ((N % 3 == 0) and (N % 5 == 0))
        return "FizzBuzz"
    elseif (N % 3 == 0)
  return "Fizz"
      elseif (N % 5 == 0)
      return "Buzz"
    endif
      return string(N)

for (初期値: i = 1, 条件: i <= 15, 更新: i += 1)
    print(fizz_buzz(i))
endfor
しかし、このコードはインデントが乱雑であり、プログラムの構造を把握しづらいです。

インデントを整理することで、このプログラムを理解しやすいように修正してください。

*/

const fizz_buzz = (N: number) => {
  if (N % 3 === 0 && N % 5 === 0) {
    return "FizzBuzz";
  } else if (N % 3 === 0) {
    return "Fizz";
  } else if (N % 5 === 0) {
    return "Buzz";
  } else {
    return N;
  }
};

for (let i = 1; i <= 15; i++) {
  console.log(fizz_buzz(i));
}
