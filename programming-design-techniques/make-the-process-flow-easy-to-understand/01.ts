/*
カメのアルルは次の問題を考えています。

xy 平面上の 5 つの点 (1,2), (−1,−3), (−2,1), (−3,−2), (2,−1) は、それぞれ第何象限にありますか。答えとなる整数を、順に改行区切りで出力するプログラムを作成してください。

ただし、xy 平面上の点 (x,y) は、

x が正で y が正のとき、第 1 象限にある

x が負で y が正のとき、第 2 象限にある

x が負で y が負のとき、第 3 象限にある

x が正で y が負のとき、第 4 象限にある

といいます。

次の擬似コードは、アルルが実際に書いたものです。

// 点 (x, y) が第何象限にあるか (1, 2, 3, 4) を返す関数
// ただし、どれでもなければ 0 を返すようにした
def int: quadrant(int: x, int: y)
    if (0 < x and 0 < y) return 1
    elseif (0 > x and 0 < y) return 2
    elseif (0 > x and 0 > y) return 3
    elseif (0 < x and 0 > y) return 4
    else return 0
    endif

print(quadrant(1, 2))
print(quadrant(-1, -3))
print(quadrant(-2, 1))
print(quadrant(-3, -2))
print(quadrant(2, -1))
このコードは、条件式が直感的にわかりにくく、読みにくいです。

このプログラムと同じ動作をする、読みやすいプログラムを作成してください。

*/

const getQuadrant = (x: number, y: number) => {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  } else {
    return 0;
  }
};

console.log(getQuadrant(1, 2));
console.log(getQuadrant(-1, -3));
console.log(getQuadrant(-2, 1));
console.log(getQuadrant(-3, -2));
console.log(getQuadrant(2, -1));
