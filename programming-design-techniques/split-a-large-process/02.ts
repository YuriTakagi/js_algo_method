/*
処理の一部を変数として切り出すことで、処理の意味を理解しやすくなることがあるのでした。

しかし、切り分ける必要のない処理まで切り分けてしまうと、逆に理解しづらくなることもあります。

例として、次の Python コードを考えます。

count_dict = { "aruru": 4, "arara": 3, "iruru": 10 }
count_list = [10, 2, 5]
count_aruru = count_dict["aruru"]
count_list[0] = count_aruru
このコードでは、変数 count_aruru を作成して、その値をリスト count_list に代入しています。

しかし、count_aruru は意味が明らかな式 count_dict["aruru"] をほぼそのまま言い換えたものです。

そのため、読むべき処理が増え、むしろ処理を理解しづらくしています。

このような場合は、処理を変数に切り分けない方がよいです。

count_dict = { "aruru": 4, "arara": 3, "iruru": 10 }
count_list = [10, 2, 5]
count_list[0] = count_dict["aruru"]
問題文
次の擬似コードは、現在の日付を取得してその値を別の変数に格納するものです。

ただし、現在の日付は datetime.today() 関数により取得できるものとします。

// ファイルデータを管理する変数
FileData: file_data = (ファイルを開く処理)

str: today = datetime.today()
file_data.last_viewed = today // ファイルを最後に見た日を更新する
このコードの変数 today は不必要な変数です。

次の選択肢のうち、その理由として 最も適切でないもの を選んでください。

<選択肢>

1.　変数を切り分けたとしても、処理の意図の伝わりやすさがあまり変わらないから。

2.　処理が元からシンプルであるから。

3.　datetime.today() という関数は負荷の軽い処理であるから。

4.　このコードでは変数 date_today は一度しか使用されていないので、今後再利用しなくてもよいから。

*/

3