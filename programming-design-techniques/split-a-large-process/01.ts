/*
カメのアルルは、次の問題を考えています。

あるお店では、買い物をすると普段は購入金額 (円) の 1 パーセント (小数点以下は切り捨て) のポイントがもらえます。

さらに、一の位が 5 の日 (5 日、15 日、25 日) は「スペシャルデー」と呼ばれており、「スペシャルデー」に買い物をすると、もらえるポイントは普段の 3 倍になります。

カメのイルルは、先月このお店で買い物をしました。購入日と購入金額は次のとおりです。

購入日 (日)	購入金額 (円)
4	700
5	1200
8	3000
18	600
25	2800
イルルが先月もらったポイントの合計を、整数で出力するプログラムを作成してください。

次の擬似コードは、アルルが実際に書いたものです。

def int: calc_point(int: day, int: amount)
    int: point = amount ÷ 100 の商
    if (day % 10 == 5)
        point *= 3
    endif
    return point

int[]: purchase_day_list = [4, 5, 8, 18, 25]
int[]: purchase_amount_list = [700, 1200, 3000, 600, 2800]
int: point_total = 0
for (初期値: index = 0, 条件: index < (purchase_day_list の長さ), 更新: index += 1)
    day = purchase_day_list[index]
    amount = purchase_amount_list[index]
    point_total += calc_point(day, amount)
endfor
print(point_total)
このコードでは、条件式 day % 10 == 5 が表す意味や処理の意図が伝わりにくいと考えられます。

条件式の結果を変数に分けることで、同じ動作をするわかりやすいプログラムを作成してください。

*/

const calcPoint = (day: number, purchasePrice: number) => {
  let point = Math.floor(purchasePrice / 100);
  const isSpecialDay = day % 10 === 5 ? true : false;
  if (isSpecialDay) {
    point *= 3;
  }
  return point;
};

const purchaseDayList = [4, 5, 8, 18, 25];
const purchasePriceList = [700, 1200, 3000, 600, 2800];

let totalPoint = 0;
for (let i = 0; i < purchaseDayList.length; i++) {
  const day = purchaseDayList[i];
  const purchasePrice = purchasePriceList[i];
  totalPoint += calcPoint(day, purchasePrice);
}
console.log(totalPoint);
