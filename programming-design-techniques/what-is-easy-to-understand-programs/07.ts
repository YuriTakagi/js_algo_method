/*
カメのアルルは、次の問題を考えています。

ある試験での 5 人の生徒が取った点数を表すリスト scores があります。

1 番目の生徒の点数の偏差値を求めてください。

次の擬似コードは、アルルが実際に書いたものです。

// 偏差値 (Z score) を計算する
def float: calc_zscore(int: N, float[]: scores, float score)
    float: average = 0.0
    for (初期値: index = 0, 条件: index < N, 更新: index += 1)
        average += scores[index]
    endfor
    average = average ÷ N の値
    float: sd = 0.0
    for (初期値: index = 0, 条件: index < N, 更新: index += 1)
        sd += (scores[index] - average) * (scores[index] - average)
    endfor
    sd = sd ÷ N の値
    sd = sqrt(sd)
    float: z_score = 50 + 10 * (score - average) ÷ sd の値
    return z_score

// 生徒の人数
int: N = 5
// 試験の点数
float[]: scores = [70, 50, 85, 69, 63]

// $1$ 番目の生徒の点数の偏差値を計算する
float: z_score = calc_zscore(N, scores, scores[0])
print(z_score)
このコードはすべての処理がまとめて書かれており煩雑なため、コードの処理を把握するのに時間がかかってしまいます。

関数 calc_zscore を 3 つの関数に分割することで、理解しやすいプログラムに修正してください。

*/

const scores = [70, 50, 85, 69, 63];
const numOfPeople = scores.length;

const getAverage = (scores: number[], numOfPeople: number) => {
  return scores.reduce((num1, num2) => num1 + num2) / numOfPeople;
};

const getStandardDeviation = (scores: number[], numOfPeople: number) => {
  let sum = 0;
  const average = getAverage(scores, numOfPeople);
  scores.forEach((score) => {
    sum += (score - average) ** 2;
  });
  return Math.sqrt(sum / numOfPeople);
};

const getDeviation = (score: number, scores: number[]) => {
  const average = getAverage(scores, numOfPeople);
  const standardDeviation = getStandardDeviation(scores, numOfPeople);
  return 50 + (score - average) / standardDeviation * 10;
};

console.log(getDeviation(scores[0], scores));
