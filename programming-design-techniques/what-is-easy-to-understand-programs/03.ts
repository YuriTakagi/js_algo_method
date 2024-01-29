/*
カメのアルルは、次の問題を考えています。

円周率を 3.14 とします。次の 5 つの値を、この順に改行区切りで出力するプログラムを作成してください。

半径 5 [cm] の円の円周の長さ ([cm])

半径 5 [cm] の円の面積 ([cm^2])

半径 5 [cm]、高さ 10 [cm] の円柱の体積 ([cm^3])

半径 5 [cm] の球の表面積 ([cm^2])

半径 5 [cm] の球の体積 ([cm^3])

次の擬似コードは、アルルが実際に書いたものです。

print(2 * 5 * 3.14)
print(5 * 5 * 3.14)
print(5 * 5 * 3.14 * 10)
print(4 * 5 * 5 * 3.14)
print(4 / 3.0 * 5 * 5 * 5 * 3.14)
しかし、このコードには読みにくい部分があります。

このプログラムと同じ動作をする、読みやすいプログラムを作成してください。
*/

const radius = 5;
const pi = 3.14;
const height = 10;
console.log(2 * pi * radius);
console.log(pi * (radius ** 2));
console.log(pi * (radius ** 2) * height);
console.log(4 * pi * (radius ** 2));
console.log(4 / 3.0 * pi * (radius ** 3));