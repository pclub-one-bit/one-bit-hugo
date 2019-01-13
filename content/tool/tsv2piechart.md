+++
title = "円グラフ生成ツール"
description = "タブなどで区切った文字列から円グラフを生成するツールです。"
image = "tsv2piechart/image.jpg"
+++

## このツールについて
タブや空白で区切った文字列から円グラフを生成するツールです。  
Excelでグラフを作るのが面倒な人、そもそもExcelを持ってない人に向けています。  

タブ区切りが対象なのでExcelやGoogleスプレッドの内容をコピペしても円グラフにすることができます。  
こんな感じでコピーして、それをテキストエリアコピペすればOKです。  
![Spread](/img/tool/tsv2piechart/spread.png)  
テキストエリアにデータを貼ったら描画ボタンをクリックしてください。  
下側にグラフを描画します。  
描画したグラフは画像でダウンロードすることもできます。  

---

<h3>データ</h3>
<div id="tsv2pichart-source">
    <table>
        <tbody>
            <tr>
                <th><label for="size">タイプ</label></th>
                <td>
                    <select name="chart_type">
                        <option value="pie" selected>円</option>
                        <option value="doughnut">ドーナツ</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="size">サイズ</label></th>
                <td>
                    <input type="number" name="chart_size" min="100" max="1000" value="1000"　required>
                </td>
            </tr>
            <tr>
                <th><label for="source">データ</label></th>
                <td>
                    <textarea name="source" id="source" rows="10" required="">
Red 300
Orange 200
Yellow 400
Green 500
Blue 100
                    </textarea>
                </td>
            </tr>
        </tbody>
    </table>
    <button id="render">描画</button>
</div>
<br>
<h3>グラフ</h3>
<div id="tsv2pichart-chart" style="display: none;">
    <canvas id="chart-canvas"></canvas>
    <br>
    <button id="download">画像でダウンロード</button>
</div>