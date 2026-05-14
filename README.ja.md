# SHA1

このプロジェクトは、DenoおよびNode.js環境に対応した、JavaScriptで実装されたシンプルなSHA-1ハッシュ関数を提供します。

## 特徴
- 文字列およびバイナリデータの入力をサポート
- 同期および非同期のダイジェストメソッド
- ファイルをハッシュ化するためのコマンドラインツール

## 要件
- DenoまたはNode.js環境

## 使用方法

### ライブラリとして
```javascript
import { SHA1 } from "./SHA1.js";

const hash = await SHA1.digest("hello world");
console.log(hash); // "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed"
```

### コマンドラインツール
```
deno run cli.js path/to/file.txt
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
