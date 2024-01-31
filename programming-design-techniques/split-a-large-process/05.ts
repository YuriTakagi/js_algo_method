/*
次の C++ コードの vector 型変数 numbers は、宣言した行 (13 行目) 以降のどのスコープでも参照・変更ができる変数になっています。このような変数を グローバル変数 といいます。

#include <iostream>
#include <vector>
using namespace std;

// vec の要素を空白区切りで出力する関数
void print_vector(vector<int> vec) {
    for (int index = 0; index < (int)vec.size(); index++) {
        cout << vec[index] << " ";
    }
    cout << endl;
}

vector<int> numbers = {10, 20, 40, 50, 30};

// numbers の 2 つの要素にそれぞれ +1, -1 をする関数
void distribute(int index_plus, int index_minus) {
    numbers[index_plus]++;
    numbers[index_minus]--;
}

int main() {
    print_vector(numbers);      // 出力: 10 20 40 50 30
    distribute(4, 2);
    print_vector(numbers);      // 出力: 10 20 39 50 31
    distribute(0, 1);
    print_vector(numbers);      // 出力: 11 19 39 50 31
}
特に大規模なコードを書く場合、グローバル変数は基本的に用いるべきでないとされます。

グローバル変数を用いると、どのような問題が発生する可能性があるでしょうか。適切でないものを、選択肢から 1 つ選んでください。

ただし、1. から 3. のすべてが適切である場合、4. を選んでください。

<選択肢>

1.　変数を使い続けることになるため、処理全体の流れを追いづらく、コードが読みにくくなる

2.　グローバル変数を処理の途中で意図せず変更してしまった場合、バグの原因になる。

3.　コードに変更を加えようとすると、グローバル変数が関わるすべての部分に影響が及んでしまう可能性があるため、修正が困難になる。

*/

4;
