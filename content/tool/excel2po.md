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
    <div class="area-from">
        *　半角空白／タブ区切り文字列
        <textarea rows="20" id="excel2po-from">
キー1	名称1
キー2	名称2
キー3	名称3
        </textarea>
    </div>
    <div class="area-to">
        *　poファイル用文字列
        <textarea rows="20" id="excel2po-to" readonly="readonly"></textarea>
    </div>
</div>
