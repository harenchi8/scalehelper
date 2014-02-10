scalehelper
===========

CSS3を使わずに要素の拡大縮小アニメーションを補助するjqueryのプラグイン的なものです。<br>
処理の速度等はあまり考えずに習作として制作しました。<br>
ためしに・・・・ためしにです・・・。<br>

▼使い方<br>
$("要素").scaleAnm({scale:0.1.....});<br>
のような感じです。<br>
拡大縮小したい要素を指定して使うだけです。<br>
(例)<br>
$(".testBox").scaleAnm({scale:0.1,duration:500,ease:"easeOutElastic"});<br>

▼引数の種類と役割<br>

scale：Number <br>
拡大率の値を設定します。<br>
値の範囲は0~1です。<br>
初期値は1です。<br>

point：String<br>
拡大の基準点を指定します。<br><br>
初期値は"CC"です。<br>
種類は以下の通りです。<br>
"TL"⇒左上<br>
"TC"⇒中央上<br>
"TR"⇒右上<br>
"CL"⇒左中央<br>
"CC"⇒中央<br>
"CR"⇒右中央<br>
"BL"⇒左下<br>
"BC"⇒中央下<br>
"BR"⇒右下<br>

duration：Number<br>
アニメーションの時間をmsで指定します。<br>
初期値は1000です。<br>

delay：Number<br>
アニメーション開始前に発生させるディレイの時間をmsで指定します。<br>
初期値は0です。<br>

ease：String<br>
イージングを指定します。<br>
初期値はnullです。<br>

callback：function<br>
アニメーション終了時に呼び出す関数を指定します。<br>
