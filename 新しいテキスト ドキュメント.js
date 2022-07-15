


//ジャバスクリプトの始まり、実装時には外部ファイル化して読込する。






// 給与計算上部分のボタンの要素を取得
var button = document.getElementById("button2");

// そのボタンをクリックした時の処理　計算してすべての合計を行うところまで行う

button.addEventListener("click", function(e) {


    e.preventDefault();



// 全ての入力された値を取得（数字として認識する処理を挟む）





    var master_salary = parseFloat(document.getElementById("master_salary").value);
    var master_pension = parseFloat(document.getElementById("master_pension").value);
    var master_income = parseFloat(document.getElementById("master_income").value);
    var master_age = parseFloat(document.getElementById("master_age").value);

    var first_companion_salary = parseFloat(document.getElementById("first_companion_salary").value);
    var first_companion_pension = parseFloat(document.getElementById("first_companion_pension").value);
    var first_companion_income = parseFloat(document.getElementById("first_companion_income").value);
    var first_companion_age = parseFloat(document.getElementById("first_companion_age").value);

    var second_companion_salary = parseFloat(document.getElementById("second_companion_salary").value);
    var second_companion_pension = parseFloat(document.getElementById("second_companion_pension").value);
    var second_companion_income = parseFloat(document.getElementById("second_companion_income").value);
    var second_companion_age = parseFloat(document.getElementById("second_companion_age").value);

    var third_companion_salary = parseFloat(document.getElementById("third_companion_salary").value);
    var third_companion_pension = parseFloat(document.getElementById("third_companion_pension").value);
    var third_companion_income = parseFloat(document.getElementById("third_companion_income").value);
    var third_companion_age = parseFloat(document.getElementById("third_companion_age").value);

    var fourth_companion_salary = parseFloat(document.getElementById("fourth_companion_salary").value);
    var fourth_companion_pension = parseFloat(document.getElementById("fourth_companion_pension").value);
    var fourth_companion_income = parseFloat(document.getElementById("fourth_companion_income").value);
    var fourth_companion_age = parseFloat(document.getElementById("fourth_companion_age").value);

    var fifth_companion_salary = parseFloat(document.getElementById("fifth_companion_salary").value);
    var fifth_companion_pension = parseFloat(document.getElementById("fifth_companion_pension").value);
    var fifth_companion_income = parseFloat(document.getElementById("fifth_companion_income").value);
    var fifth_companion_age = parseFloat(document.getElementById("fifth_companion_age").value);



// 計算式にループ処理して代入するため配列を作成、計算前の配列との明確な区別、混合を防ぎ、計算後の数字を格納するため新たな配列を作成。





    let salary = [master_salary,first_companion_salary ,second_companion_salary , third_companion_salary , fourth_companion_salary , fifth_companion_salary];

    let after_salary =[];

    let pension = [master_pension,first_companion_pension ,second_companion_pension , third_companion_pension ,fourth_companion_pension, fifth_companion_pension];

    let after_pension = [] ;

    let income = [master_income,first_companion_income,second_companion_income,third_companion_income,fourth_companion_income,fifth_companion_income];

    let after_income = [] ;

    let age = [master_age,first_companion_age,second_companion_age,third_companion_age,fourth_companion_age,fifth_companion_age];

    let sum = 0;




// ループ処理を行っていく、給与から所得の計算、回数がsalary.lengthであるが、６回繰り返すのにきれいではないが特に問題はないため維持





    for(let i = 0; i < salary.length; i++) {



    if(!salary[i]){
    after_salary[i] = 0 ;
    }

    else if(salary[i] <= 551000){
    after_salary[i] = 0 ;
    }

    else if(salary[i]
    <= 651000){
    after_salary[i] = 0 ;
    }

    else if(salary[i]
    < 1619000){
    after_salary[i] = salary[i] - 550000 - 100000 ;
    }

    else if(salary[i]
    < 1620000){
    after_salary[i] = 1069000 - 100000;
    }

    else if(salary[i] < 1622000){after_salary[i] = 1070000 - 100000 ;
    }

    else if(salary[i] <1624000){after_salary[i] = 1072000 - 100000;
    }

    else if(salary[i] <1628000){after_salary[i] = 1074000 - 100000 ; 
    }

    else if(salary[i]
    < 1800000){after_salary[i] = (Math.floor(salary[i]/4000)*4000)*0.6 + 100000 - 100000 ;
    }

    else if(salary[i] < 3600000){after_salary[i] = (Math.floor(salary[i]/4000)*4000)*0.7 -80000 - 100000 ;
    }

    else if(salary[i] < 6600000){after_salary[i] = (Math.floor(salary[i]/4000)*4000)*0.8 - 440000 - 100000 ;
    }

    else if(salary[i] < 8500000){after_salary[i] = salary[i]*0.9 - 1100000 - 100000;
    }

    else if(salary[i] > 8500000){after_salary[i] = salary[i] - 1950000 ;
    }









// 年金の計算age関数で65をラインにif関数で2パターンに場合分け






    if(65 <= age[i]){
    if(!pension[i]){after_pension[i] = 0 ;}

    else if(pension[i]<=1100000){after_pension[i] = 0;}

    else if(pension[i] < 1200000){after_pension[i] = 0 ;}

    else if(pension[i] < 3300000){after_pension[i] = Math.floor(pension[i] -1100000 - 100000);}

    else if(pension[i] < 4100000){after_pension[i] = Math.floor(pension[i] * 0.75 - 275000 - 100000 );}

    else if(pension[i] < 7700000){after_pension[i] = Math.floor(pension[i] * 0.85 -685000 - 100000);}

    else if(pension[i] < 10000000){after_pension[i] = Math.floor(pension[i] *0.95 - 1450000 - 100000);}

    else if(pension[i] >= 10000000){after_pension[i] = "エラー、額が大きい若しくは小さすぎるため本サイトでは計算できません。";}

    }



    else if(65 > age[i] || !age[i] ){


    if(!pension[i]){after_pension[i] = 0 ;
    }

    else if(pension[i] <= 600000){after_pension[i] = 0 ;}

    else if(pension[i] <= 700000){after_pension[i] = 0 ;}

    else if(pension[i] <= 1300000){after_pension[i] = Math.floor(pension[i] - 600000 - 100000) ;
    }

    else if(pension[i] <= 4100000){after_pension[i] = Math.floor(pension[i] * 0.75 - 275000 - 100000 );}

    else if(pension[i] <= 7700000){after_pension[i] = Math.floor(pension[i] * 0.85 - 685000 - 100000);}

    else if(pension[i] < 10000000){after_pension[i] = Math.floor(pension[i] * 0.95 - 1450000 - 100000);}

    else if(pension[i] >= 10000000){after_pension[i] = "エラー、額が大きい若しくは小さすぎるため本サイトでは計算できません。";}

    }









//　所得計算、損益通算の可能性を考えると負の数も実装できるようにしたい。






    if(!income[i]){
        after_income[i] = 0;
        }

    else {
        after_income[i] = income[i];
        }







    sum += Math.floor(after_salary[i]+after_pension[i]+after_income[i]);

    }





// 一つ目のボタンの処理終了









// ボタンの要素を取得 2個目







    // すべての入力フォームの値を取得
    var relative_disabled = parseFloat(document.getElementById("relative_disabled").value);
    var elderly_disabled = parseFloat(document.getElementById("elderly_disabled").value);
    var support_relative_disabled = parseFloat(document.getElementById("support_relative_disabled").value);
    var disabled_deduction = parseFloat(document.getElementById("disabled_deduction").value);
    var special_disabled_deduction = parseFloat(document.getElementById("special_disabled_deduction").value);
    var widow_disabled = parseFloat(document.getElementById("widow_disabled").value);
    var single_parent_disabled = parseFloat(document.getElementById("single_parent_disabled").value);


    let disabled = [relative_disabled , elderly_disabled , support_relative_disabled , disabled_deduction , special_disabled_deduction , widow_disabled , single_parent_disabled];

    let after_disabled = [];










    for(let o = 0; o < disabled.length; o++) {


    if(!disabled[o]){
        after_disabled[o] = 0;
        }
    else if(disabled[o] >=0){
        after_disabled[o] = disabled[o];
        }

}



    var sum2 = sum;





    // すべての数値を足す　が、控除ごと額が定められているため、かけた上え実装


    var sum3 = sum2 - (after_disabled[0]*380000 + after_disabled[1]*100000 + after_disabled[2]*250000 +  after_disabled[3]*270000
    +  after_disabled[4]*400000 +  after_disabled[5]*270000 +  after_disabled[6]*350000);







    var sumd = sum3 /12;

    var sume = Math.floor(sumd);



    if(sume<0){
        sume = 0;
        }

    else if(sume>=0){
        sume = sume;
        }






    var resultForm2 = document.getElementById("resultForm2");
    resultForm2.value = sume;





let a = 0;
let b = 0;
let c = 0;
let d = 0;




if (sume == 0){a="分位1";}
else if (sume <= 104000){a="分位1";}
else if (sume <= 123000){a="分位2";}
else if (sume <= 139000){a="分位3";}
else if (sume <= 158000){a="分位4";}
else if (sume <= 186000){a="分位5";}
else if (sume <= 214000){a="分位6";}
else if (sume <= 259000){a="分位7";}
else if (sume > 259000){a="分位8";}


    var resultForm3 = document.getElementById("resultForm3");
    resultForm3.value = a;

//分位に応じて基準家賃も算出

if (sume == 0){b=34400;}
else if (sume <= 104000){b=34400;}
else if (sume <= 123000){b=39700;}
else if (sume <= 139000){b=45400;}
else if (sume <= 158000){b=51200;}
else if (sume <= 186000){b=58500;}
else if (sume <= 214000){b=67500;}
else if (sume <= 259000){b=79000;}
else if (sume > 259000){b="91100or近傍同種";}

    var resultForm4 = document.getElementById("resultForm4");
    resultForm4.value = b;

//if収入基準　低かったら　〇×

if (sume <= 158000){c="〇";}
else if (sume > 158000){c="×";}
    var resultForm5 = document.getElementById("resultForm5");
    resultForm5.value = c;

//裁量も×　〇

if (sume <= 214000 ){d="〇";}
else if (sume > 214000 ){d="×";}



    var resultForm6 = document.getElementById("resultForm6");
    resultForm6.value = d;











} ) ;







// モーダルウィンド実装のためのジャバスクリプトだが、web上のデータを拾ってきたため、動作の仕組みがわからないがとりあえずは動く



$(function(){

//グローバル変数
var nowModalSyncer = null ;		//現在開かれているモーダルコンテンツ
var modalClassSyncer = "modal-syncer" ;		//モーダルを開くリンクに付けるクラス名

//モーダルのリンクを取得する
var modals = document.getElementsByClassName( modalClassSyncer ) ;

//モーダルウィンドウを出現させるクリックイベント
for(var i=0,l=modals.length; l>i; i++){

	//全てのリンクにタッチイベントを設定する
	modals[i].onclick = function(){

		//ボタンからフォーカスを外す
		this.blur() ;

		//ターゲットとなるコンテンツを確認
		var target = this.getAttribute( "data-target" ) ;

		//ターゲットが存在しなければ終了
		if( typeof( target )=="undefined" || !target || target==null ){
			return false ;
		}

		//コンテンツとなる要素を取得
		nowModalSyncer = document.getElementById( target ) ;

		//ターゲットが存在しなければ終了
		if( nowModalSyncer == null ){
			return false ;
		}

		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない
		//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する

		//オーバーレイを出現させる
		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "fast" ) ;

		//コンテンツをセンタリングする
		centeringModalSyncer() ;

		//コンテンツをフェードインする
		$( nowModalSyncer ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay,#modal-close" ).unbind().click( function() {

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#" + target + ",#modal-overlay" ).fadeOut( "fast" , function() {

				//[#modal-overlay]を削除する
				$( '#modal-overlay' ).remove() ;

			} ) ;

			//現在のコンテンツ情報を削除
			nowModalSyncer = null ;

		} ) ;

	}

}

	//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//モーダルウィンドウが開いてなければ終了
		if( nowModalSyncer == null ) return false ;

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		//コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( nowModalSyncer ).outerWidth( {margin:true} ) ;
//		var ch = $( nowModalSyncer ).outerHeight( {margin:true} ) ;
		var cw = $( nowModalSyncer ).outerWidth() ;
		var ch = $( nowModalSyncer ).outerHeight() ;

		//センタリングを実行する
		$( nowModalSyncer ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

} ) ;


