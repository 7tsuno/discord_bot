# Discord bot

特定の文字列に対して返事を返すBot

## 導入方法

DISCORD側にBOTユーザを作る。(ぐぐれば出るので省略)

setting.jsonにtokenを追記する。

```json:setting.json
{
  "token" : "ディスコードBOTのアクセストークン"
}
```

dictionary.jsonに返答させたい対象の文と返答文の組み合わせを追記する。

```json:setting.json
{
  "ぬるぽ" : "ガッ",
  "山" : "川"
}
```

npm install

```
npm install
```

npm start

```
npm start
```
