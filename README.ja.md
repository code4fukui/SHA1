# SHA1

SHA1は、ファイルやデータのデジタル署名や改ざん検知に使われるハッシュ関数です。このリポジトリでは、JavaScriptで実装したSHA1ハッシュ計算ライブラリを提供しています。

## 機能
- 文字列やバイナリデータからSHA1ハッシュ値を生成できます
- 同期・非同期両方のAPIを提供しています
- コマンドラインからファイルのハッシュ値を取得できます

## 必要環境
- Deno 1.8以上
- Node.js

## 使い方

### ライブラリとして使用する
```javascript
import { SHA1 } from "./SHA1.js";

const hash = await SHA1.digest("hello world");
console.log(hash); // "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed"
```

### コマンドラインから使用する
```
deno run cli.js path/to/file.txt
```

## ライセンス
MIT License