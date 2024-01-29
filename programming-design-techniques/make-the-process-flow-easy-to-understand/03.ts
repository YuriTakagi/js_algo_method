/*
カメのアルルは、次の問題を考えています。

以下に示す文字列の 2 つ組について、[条件 1] と [条件 2] を両方とも満たすかどうか判定するプログラムを作成してください。

満たすならば Yes を、満たさなければ No を、改行区切りで出力してください。

[条件 1]　2 つの文字列は同じ長さである。

[条件 2]　2 つの文字列は、ちょうど 1 か所の文字が異なる。

(文字列の組)

"aruru", "araru"

"aruru", "arara"

"aruru", "aruru"

"algo", "all"

"str", "std"

次の擬似コードは、アルルが実際に書いたものです。

def str: is_similar(str: str1, str: str2)
    str: ok = "Yes"
    // 条件 1 のチェック
    if ((str1 の長さ) != (str2 の長さ))
        ok = "No"
    endif

    // 条件 2 のチェック
    int: diff_count = 0
    for (初期値: index = 0, 条件: index < (str1 の長さ), 更新: index += 1)
        if (str1[index] != str2[index])
            diff_count += 1
        endif
    endfor
    if (diff_count != 1)
        ok = "No"
    endif
    return ok

print(is_similar("aruru", "araru"))
print(is_similar("aruru", "arara"))
print(is_similar("aruru", "aruru"))
print(is_similar("algo", "all"))
print(is_similar("str", "std"))
このコードは正しい答えを返しますが、変数 ok が関数全体の処理に関与しており読みづらいです。

次の方針で、ok のような変数を用いずに、同じ動作をするプログラムを作成してください。

条件を満たさないことがわかった時点で No を返す。
*/

const isSameLength = (str1: string, str2: string) => {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
};

const hasOneDifferentCharacter = (str1: string, str2: string) => {
  let diffCount = 0;
  for (let index = 0; index < str1.length; index++) {
    if (str1[index] !== str2[index]) {
      diffCount++;
    }
  }
  if (diffCount === 1) {
    return true;
  } else {
    return false;
  }
};

const isSimilar = (str1: string, str2: string) => {
  if (!isSameLength(str1, str2)) {
    console.log("No");
    return;
  }
  if (!hasOneDifferentCharacter(str1, str2)) {
    console.log("No");
    return;
  } else {
    console.log("Yes");
  }
};

const charCombis = [
  ["aruru", "araru"],
  ["aruru", "arara"],
  ["aruru", "aruru"],
  ["algo", "all"],
  ["str", "std"],
];

charCombis.forEach((pair) => {
  isSimilar(pair[0], pair[1]);
});

// isSimilar関数内に条件1と条件2の判定ロジックをまとめる
const isSimilar2 = (str1: string, str2: string) => {
  if (str1.length !== str2.length) {
    return "No";
  }
  let diffCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[1] !== str2[i]) {
      diffCount++;
    }
  }
  if (diffCount === 1) {
    return "Yes";
  } else {
    return "No";
  }
};

charCombis.forEach((pair) => {
  console.log(isSimilar2(pair[0], pair[1]));
});
