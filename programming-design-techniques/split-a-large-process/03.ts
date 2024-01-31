/*
カメのアルルは、次の問題を解いています。

平面座標上に 3 つの点 A(3,4),B(2,5),C(6,3) があります。

2 点間の距離の総和 AB+AC+BC を出力するプログラムを作成してください。

ただし、点 (x 
1
​
 ,y 
1
​
 ),(x 
2
​
 ,y 
2
​
 ) の距離は次のように計算できます。

(x 
1
​
 −x 
2
​
 ) 
2
 +(y 
1
​
 −y 
2
​
 ) 
2
 
​
 
次の擬似コードは、アルルが実際に作成したものです。

ただし、ここでの sqrt() 関数は引数の平方根  
​
  を計算するものとします。

float[]: x_coord = [3, 2, 6]
float[]: y_coord = [4, 5, 3]
float: dist_sum = 0.0
dist_sum += sqrt((x_coord[0] - x_coord[1]) * (x_coord[0] - x_coord[1]) + (y_coord[0] - y_coord[1]) * (y_coord[0] - y_coord[1]))
dist_sum += sqrt((x_coord[0] - x_coord[2]) * (x_coord[0] - x_coord[2]) + (y_coord[0] - y_coord[2]) * (y_coord[0] - y_coord[2]))
dist_sum += sqrt((x_coord[1] - x_coord[2]) * (x_coord[1] - x_coord[2]) + (y_coord[1] - y_coord[2]) * (y_coord[1] - y_coord[2]))
print(dist_sum)
このコードでは、似た形の複雑な式が繰り返し現れており、擬似コード 4,5,6 行目の処理を把握しづらいです。

処理の一部を新たな関数に分けることで、このプログラムと同じ動作をする読みやすいプログラムを作成してください。

*/

const xCoord = [3, 2, 6];
const yCoord = [4, 5, 3];

const calcDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

let sumDistance = 0;
for (let i = 0; i < xCoord.length; i++) {
  for (let j = i + 1; j < xCoord.length; j++) {
    sumDistance += calcDistance(xCoord[i], yCoord[i], xCoord[j], yCoord[j]);
  }
}
console.log(sumDistance);
