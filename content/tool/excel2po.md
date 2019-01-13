+++
title = "poファイル生成ツール"
description = "Wordpressなどで使われるpoファイルを作るためのツールです。"
image = "excel2po/image.jpg"
+++

## このツールについて
Wordpressなどで使われるpoファイルを作るためのツールです。  
左のテキストエリアに キーと名称 を入力すると、  
右のテキストエリアにpoファイル形式の文字列が表示されるのでそれをコピーしてください。  
キーと名称は半角空白かタブで区切ってください。  
タブ区切りも有効なのでExcelやGoogleスプレッドの内容をコピペしてもpoファイル形式にすることができます。  
こんな感じでコピーして、それを左側にコピペすればOKです。  
![Spread](/img/tool/excel2po/spread.jpg)

---

<div id="excel2po">
    <div id="button-area">
        <button id="convert">変換</button>
    </div>
    <div class="area-left">
        <label for="tsv">半角空白／タブ区切り文字列</label>
        <textarea rows="20" id="source" name="tsv">
キー1	名称1
キー2	名称2
キー3	名称3
        </textarea>
    </div>
    <div class="area-right">
        <label for="po">poファイル用文字列</label>
        <textarea rows="20" id="po" name"po" readonly="readonly"></textarea>
    </div>
</div>
