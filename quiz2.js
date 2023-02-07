
//001----------javascriptの開始--------------------------------------------------
    /*window.onload = function(){
//002----------スタートボタンをクリックして発火--------------------------------------
            var start = document.getElementById('start');
            start.addEventListener('click',count_start, false);
        }     */
//-----------------------------------------------------------------------------
//変数の定義---------------------------------------------------------------------
    var count   = 120;     //カウントダウンの数字を格納する変数  3分なので180
    var min     = 0;       //残り時間「分」を格納する変数
    var sec     = 0;       //残り時間「秒」を格納する変数
    var start_f = false; 
    var interval;
    var interval2;
    var dore = 0;
    var group = 0;
    var num = 0;
    var kekka_yuukou = 0;
    const question = [
      ["プロジェクションマッピングの映像に出てくる、黄色い背景にふわふわと浮かび上がるシャボン玉は、働く前の女性が抱いている仕事やプライベートでの将来の何と何を表現していますか。", 
       "青いクリスタルの上に出てくる、「鎖」は育児や介護などのライフイベントによる時間的な何を表現しているかな。", 
       "女性にしか起きないライフイベントはなにかな？"],//第1問(1班)
      ["2班の衣装の袖口、襟元などLGBTQのマークに使われているよ。このマークはなんでしょう？", 
       "2班の衣装全体の生地はオーロラ生地にしてるよ。これは、○○の多様性を表しているよ。○○とはなーんだ。", 
       "2班のマントは、何を表しているでしょう？"],//第2問
      ["衣装の胸元の黄色い花のコサージュは、何を表しているでしょう。",
       "衣装のスカートの上に被さっている檻のようなスカートは、何でしょう。",
       "衣装のスカートの上の青い光は、オンライン化による新たな何を表しているでしょうか。"],//第3問
      ["4班の衣装はどの時代を表しているでしょうか。",
       "真ん中のハートは何を表しているのでしょうか。",
       "アイドルという概念が生まれたのは何年でしょうか。"],//第4問
      ["","",""],//ダミー
    ]; //各班ごとに分けたよ

    const sentakusi1 = [
      ["嬉しさや不安",
       "制約制限",
       "介護"],//第1問
      ["七色の虹",
       "個性",
       "喜び"],//第2問
      ["絶望や悲しみ",
       "クリスマス",
       "幸せの形"],//第3問
      ["バブル期",
       "ファンの気持ち",
       "1960年"],//第4問
      ["","",""],//ダミー
    ];

    const sentakusi2 = [
      ["喜びや楽しさ",
       "節約",
       "病気"],//第1問
      ["レインボーフラッグ",
       "文化",
       "悪魔"],//第2問
      ["喜びや期待",
       "フレアスカート",
       "家族の形"],//第3問
      ["バブル崩壊後",
       "みなみちゃんの心",
       "1970年"],//第4問
      ["","",""],//ダミー
    ];

    const sentakusi3 = [
      ["理想や希望",
       "無限",
       "出産"],//第1問
      ["レインボー",
       "関係性",
       "危険"],//第2問
      ["緊張",
       "クリノリン",
       "生活の形"],//第3問
      ["インターネット普及後",
       "飾り",
       "1980年"],//第4問
      ["","",""],//ダミー
    ];

    const sentakusi4 = [
      ["緊張や心配",
       "自由",
       "転勤"],//第1問
      ["レインボーカラー",
       "性格",
       "差別・偏見"],//第2問
      ["欲望や野望",
       "パニエ",
       "コミュニケーションの形"],//第3問
      ["未来",
       "世界中の愛",
       "1990年"],//第4問
      ["","",""],//ダミー
    ];

    const answer = [
      [2,0,2],//第1問答え
      [1,0,3],//第2問答え
      [1,2,3],//第3問答え
      [2,0,1],//第4問答え
      [0,0,0],//ダミー
    ];

    const seikailist = [
      "あなたの正解数は0点!",
      "あなたの正解数は1点!",
      "あなたの正解数は2点!",
      "あなたの正解数は3点!",
      "あなたの正解数は4点!",
    ];

    const seikaisitakazu = [
      "0",
      "1",
      "2",
      "3",
      "4",
    ];



//-----------------------------------------------------------------------------

//004----------スタート開始------------------------------------------------------
function count_start(){
  localStorage.setItem('seikainum', group);
//0041------------二度押しを防止する
  if (start_f === false) {
//0042------------1秒毎にcont_down関数を呼び出す
    interval = setInterval(count_down,1000);
    start_f = true;
  }
}
//-----------------------------------------------------------------------------

//005------------カウントダウンの開始---------------------------------------------
function count_down(){
//006--------------------------------------------------------------------------
        if(count === 1){
          if(group == 4){

          }else{
            var display = document.getElementById("default");
            window.location.href = 'timeup.html';
            clearInterval(interval);
          }
//007-------------------------------------------------------------------------
        } else {
//008-------------------------------------------------------------------------
            count--;
//009----------Math.floor関数を使って小数点になった分を整数に変換する。---------------
            min = Math.floor(count / 60);
//010------------60秒で割ったあまりが秒となる-------------------------------------
            sec = count % 60;
            var count_down = document.getElementById("default");
            count_down.innerHTML = ("0"+min) +":" + ("0"+sec).slice(-2);
        }
}

    


          
/*function test(){
            moji=new Array();
            moji[0]="正解";
            moji[1]="はずれ";
            moji[2]="はずれ";
            errors="はずれ";
            dore=-1;
            for(i=0; i<3; i++)if(document.form1.elements[i].checked==true)dore=document.form1.elements[i].value;
            if(dore==-1)document.form1.kekka.value=errors;
            else document.form1.kekka.value=moji[dore];
            }*/
          
//開始、次へ、やり直しボタン、おめでとうボタンを押すと、questionDisplayの関数が呼ばれるよ
function questionDisplay(){
  for(i=0; i<4; i++){
      document.form1.elements[i].checked = false;
  }
  var atari = document.getElementById('atari');
      atari.style.visibility = 'hidden';
  var hazure = document.getElementById('hazure');
      hazure.style.visibility = 'hidden';
  //もし四問正解したら
  if(group == 4){
    window.location = "omedetou1.html";//別の画面へ飛ぶ
    consolelog();
  }else if(kekka_yuukou == 1){
    return;//結果ボタン有効、開始、次へ、やり直しボタンは無効の時
  }
  //var group = 0;
  //var num = 0;
  kekka_yuukou = 1;

  //開始ボタンを無効にする
  var nextbutton = document.getElementById("nextbutton");
  nextbutton.value = "❤❤❤";

  num = Math.floor(Math.random() * 3);

  var quest = document.getElementById("quest");
  quest.innerHTML = question[group][num];

  let select1 = document.getElementById("sentaku1");
  select1.textContent = sentakusi1[group][num];

  let sentaku2 = document.getElementById("sentaku2");
  sentaku2.innerHTML = sentakusi2[group][num];

  let sentaku3 = document.getElementById("sentaku3");
  sentaku3.innerHTML = sentakusi3[group][num];

  let sentaku4 = document.getElementById("sentaku4");
  sentaku4.innerHTML = sentakusi4[group][num];

  
  /*popup_atari_hidden();
  popup_hazure_hidden();*/
}


           
       

//結果ボタン押したらmyFunction関数が呼ばれるよ          
function myFunction() {
    if(kekka_yuukou==0){
      return;
    }
    dore=-1;
    for(i=0; i<4; i++){
      if(document.form1.elements[i].checked==true){
        dore=document.form1.elements[i].value;
      }
    }
    //var popup;

    var seikai;
    seikai = answer[group][num];
    //console.log(seikai);
    //console.log(dore);
    if(dore==seikai){
      /*setTimeout(function popup_atari(){ 
      }, 1500);*/
      //interval2 = setInterval(popup_atari_visible,1000);
      //clearInterval(interval2);
      //interval2 = setInterval(popup_atari_hidden,1000);
      
      //popup_atari();
      var atari = document.getElementById('atari');
      atari.style.visibility = 'visible';
      /* if(group < 3){
        var nextbutton = document.getElementById("nextbutton");
        nextbutton.value = "次へ";
        group+=1;
      }else{
        var nextbutton = document.getElementById("nextbutton");
        nextbutton.value = "おめでとう！";
      } */
      group+=1;
      localStorage.setItem('seikainum', group);

      if(group < 4){
        var nextbutton = document.getElementById("nextbutton");
        nextbutton.value = "つぎへ";
      }else{
        var nextbutton = document.getElementById("nextbutton");
        nextbutton.value = "次へ";
      }
      //popup_atari_hidden();
      //nextbutton.innerHTML = "次へ";
    }else{
      /*setTimeout(function popup_hazure(){ 
      }, 1500);*/
      //popup_hazure();
      var hazure = document.getElementById('hazure');
      hazure.style.visibility = 'visible';
      var nextbutton = document.getElementById("nextbutton");
      nextbutton.value = "やりなおし";
      //nextbutton.innerHTML = "やり直し";
    }
    //popup.classList.toggle("show");
    kekka_yuukou=0;
}

  // function popup_atari(){
  //var popup = document.getElementById("myPopup_atari");
  //popup.style.visibility ="visible";
  /*const d1 = new Date();
  while (true) {
    const d2 = new Date();
    if (d2 - d1 > 1000) {
      break;
    }
  }*/

  //popup.style.visibility ="hidden";
  //popup.classList.toggle("show");
//} 


//function popup_hazure(){
  //var popup = document.getElementById("myPopup_hazure");
  /*popup.style.display ="block";
  sleep(1000); // ポップアップ画面が閉じるのを待つ
  popup.style.display ="none";*/
  //popup.classList.toggle("show");
//}

//function popup_atari_hidden(){
  //var popup = document.getElementById("myPopup_atari");
  //popup.classList.toggle("hidden");
//}


/*function popup_hazure_hidden(){
  var popup = document.getElementById("myPopup_hazure");
  popup.classList.toggle("hidden");
}*/



function seikaisuu(){
    var seikainum = localStorage.getItem("seikainum");
    var seikai1 = document.getElementById("seikai1");
    seikai1.innerHTML = seikailist[seikainum];
    console.log(seikainum);
}


function consolelog(){
    var seikainum = localStorage.getItem("seikainum");
    console.log(seikainum);
}

function seikaida(){
    var seikainum = localStorage.getItem("seikainum");
    var seikaido = document.getElementById("seikaido");
    seikaido.innerHTML = seikaisitakazu[seikainum];
    console.log(seikainum);
}


