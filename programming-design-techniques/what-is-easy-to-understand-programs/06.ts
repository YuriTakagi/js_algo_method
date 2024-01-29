/*
カメのアルルは、次の問題を考えています。

整数 3, −1, 0, 1, −13 に対して、それぞれ次の処理をするプログラムを作成してください。

ただし、各出力は改行で区切ってください。

その整数が 0 より大きいなら、positive と出力する。

その整数が 0 より小さいなら、negative と出力する。

その整数が 0 と等しいなら、zero と出力する。

アルルは三項演算子を利用すればよいと考えました。

ただし、ここでの三項演算子とは、A if B else C と書くことで「条件式 B が true なら A、B が false なら C」を表現する演算子のことです。

次の擬似コードは、アルルが実際に書いたものです。

// 整数の符号 (正・負・ゼロ) を返す関数
def str: sign(int: n)
    return ("positive" if n > 0 else ("negative" if n < 0 else "zero"))

print(sign(3))
print(sign(-1))
print(sign(0))
print(sign(1))
print(sign(-13))
しかし、このコードは三項演算子を複雑に組み合わせていて読みにくいです。

このプログラムと同じ動作をする、読みやすいプログラムを作成してください。
*/

const numArray = [3, -1, 0, 1, -13];

const getSign = (n: number) => {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
};

numArray.forEach((num) => {
  console.log(getSign(num));
});
