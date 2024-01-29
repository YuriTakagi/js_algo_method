/*
カメのアルルは、次の問題を考えています。

円周率を 3.14 とします。次の 4 つの値を、この順に改行区切りで出力するプログラムを作成してください。

半径 3 [cm] の円の面積 ([cm^2])

半径 5 [cm] の円の面積 ([cm^2])

半径 10 [cm] の円の面積 ([cm^2])

半径 15 [cm] の円の面積 ([cm^2])

次の擬似コードは、アルルが実際に書いたものです。

print(3 * 3 * 3.14)
print(5 * 5 * 3.14)
print(10 * 10 * 3.14)
print(15 * 15 * 3.14)
しかし、このコードには読みにくい部分があります。

このプログラムと同じ動作をする、読みやすいプログラムを作成してください。
*/

const pi = 3.14;
const calculateCircleArea = (radius: number) => {
  return radius ** 2 * pi;
};

console.log(calculateCircleArea(3))
console.log(calculateCircleArea(5))
console.log(calculateCircleArea(10))
console.log(calculateCircleArea(15))
