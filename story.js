//問題と解答
      qa = new Array();
      qa[0] = ["やっほー！みなみに夢中☆"];
      qa[1] = ["アイドルグループアイドルグループMUCHUのみなみだよ。"];
      qa[2] = ["今日はスマイルフェスに行くよ！出発まであと2分！"];
      qa[3] = ["みんなはスマイルフェスについて知ってる？"];
      qa[4] = ["武庫川女子大学の榎並ゼミの学生さんたちが、行っている「MUCHU」というプロジェクトの展覧会だよ！"];
      qa[5] = ["今日はそのお手伝いをしに行くのだけど、お手伝いに行く前にみんなとこの「MUCHU」についておさらいしよう！"];
      qa[6] = ["「MUCHU」には、「女性が正規雇用で継続して働ける社会」「セックスとジェンダー」「コロナによる入学式/卒業式の変化」「女性アイドルにおける人数と変遷」という4つのテーマがあるよ！"];
      qa[7] = ["今から、このテーマに関連したする4つの質問をするから、答えてね！"];
      qa[8] = ["準備ができたら、ゲームスタートボタンを押して始めてね♡"];
      qa[9] = [""];//ダミー

      var count = 0;
      
  
      //初期設定
      //count = 0; //問題番号
  
      //setReady();
  
      
  
      //初期設定
      /*function setReady() {
        count = 0; //問題番号
        //ansers = new Array(); //解答記録
  
        //最初の問題
        quiz();
      }*/
      //問題表示
      //function quiz() {
        //問題
       // document.getElementById("text_q").innerHTML =  "みなみ：" + qa[count][0];
        //選択肢
        /*s = "";
        for (n = 1; n <= q_sel; n++) {
          s += "【<a href='javascript:anser(" + n + ")'>" + n + "：" + qa[count][n] + "</a>】";
        }
        document.getElementById("text_s").innerHTML = s;*/
      //}
  
      //解答表示
      //function anser(num) {
      //var s;
      
      //document.getElementById("text_a").innerHTML = s;
  
        //次の問題を表示
      //count++;
      //if (count < qa.length) {
        //  quiz();
        //} else {
          //終了
  
         
          /*s += "【<a href=''>次の問題に進む</a>】";
  
          document.getElementById("text_s").innerHTML = s;*/
        //}
      //}

      function firstDisplay(){
        count = 0;
        var text_s = document.getElementById('text_s');
        text_s.innerHTML = qa[count];
      }

      function nextDisplay(){
        count++;
        var text_s = document.getElementById('text_s');
        text_s.innerHTML = qa[count];
        if (count < qa.length-1) {
          
        } else {
          window.location = "start.html";//別の画面へ飛ぶ
        }
      }
//const p = document.getElementById('output'); // 出力用のp要素

// ［表示］ボタンを押したら…
/*document.querySelector('button').addEventListener('click'), () => {
  const text = document.getElementById('textInput');
  p.textContent = text.value; // p要素に出力
}*/

