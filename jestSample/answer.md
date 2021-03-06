# 課題３（質問）

## そもそも、なぜ元の関数はカバレッジ 100%のテストを書けなかったのでしょうか？

関数内で外部の関数を呼び出して(クラスの場合はインスタンス化してメソッドを使って)いたことによって、
外部の関数の挙動をテスト時にコントロールできなかったためです。外部の関数の挙動をコントロールできないため、外部の関数から返ってくる値を想定できずにテストもできなかったです。今回の例だと、DatabaseMock の save メソッドが例外を投げる場合と例外を投げずに動く場合の両方をテストしたかったが、それをテスト時にコントロールができなかったので、テストが書けなかったです。

## 依存性の注入とは何でしょうか？どのような問題を解決するために使われるのでしょうか？

依存性の注入とは、依存性をなくすために外側から動作を注入しようということです。
クラスやメソッド内で特定の決め打ちされたインスタンスや定数を利用していると、以下の問題が起こります。

・テストがしにくい

・決め打ちなので柔軟性が低い

このような問題を解決するために使われます。外からクラスやインスタンス、定数を渡すことでテストもしやすくなり、柔軟性も上がります。
今回の例でいうと、DatabaseMock は asyncSumOfArraySometimesZero の中でインスタンス化されていましたが、引数でインスタンスを渡すことにより、動作を外側から定義できるようになりました。

## 依存性の注入を実施することで、モジュール同士の結合度の強さはどのように変化したでしょうか？

結合度の強さは低くなりました。外からモジュールを受け取ることで、モジュールの動作自体は柔軟に変更できるようになりました。

## 今回のような単体テストで外部サービスとの通信が発生すると、どのようなデメリットがあるでしょうか？

1.外部のサービスで、レスポンスや挙動をコントロールできないので単体テストが書きにくくなります。（外部サービスが落ちてる時には外部 API から正常系がの値が返ってきた時のテストができない。などの問題が生じます。）

2.通信時間が発生するので、場合によってはテストが通るまでに時間がかかります。

3.外部サービスによってはリクエスト数ごとに課金されるので、費用が嵩見ます。

# 課題 4（クイズ）

1.jest の beforeAll と beforeEach の違いについて説明してください。

2.jest の設定で globalSetup は何をセットするのでしょうか？

3.expect.assertions は何のために使うのでしょうか？
