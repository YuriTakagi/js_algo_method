/*
カメのアルルは、次の問題を考えています。

1 から 6 までの整数が各面に書かれた 6 面サイコロがあります。

整数 x が書かれた面の反対側の面には、整数 7−x が書かれています。

整数 1, 7, 3, 2, 0, 5 について、それぞれ次の処理を行うプログラムを作成してください。

ただし、各出力は改行で区切ってください。

その整数がサイコロに書かれていれば、その反対側の面に書かれている整数を出力する。

その整数がサイコロに書かれていなければ、-1 を出力する。

次の擬似コードは、アルルが実際に書いたものです。

def int: opposite_side(int: x)
    if (not(x >= 1) or not(x <= 6)) return -1
    else return 7 - x
    endif

print(opposite_side(1))
print(opposite_side(7))
print(opposite_side(3))
print(opposite_side(2))
print(opposite_side(0))
print(opposite_side(5))
このコードの if 文には否定文の条件式が含まれており、理解するのに時間がかかってしまいます。

条件式を肯定文に書き直すことで、同じ動作をする読みやすいプログラムを作成してください。
*/

const numArray = [1, 7, 3, 2, 0, 5];
const oppositeSide = (x: number) => {
  if (x > 0 && x < 7) {
    return 7 - x;
  } else {
    return -1;
  }
};

numArray.forEach((num) => console.log(oppositeSide(num)));
