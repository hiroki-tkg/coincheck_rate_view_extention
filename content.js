$(function(){
	'use strict';

	// 配列rateを宣言
	var rate = new Array();

	// .buys要素を取得し、その中の.buy要素をそれぞれ取得
	$(".buys").children('.buy').each(function(index){

		// .buy要素を変数に入れる
		var buy = $(this);

		// .buy要素の中の.amount要素/.price要素を取得
		var amount = buy.children('.amount').html();
		var price = buy.children('.price').html();

		// 取得したamount要素が、"0.555 BTC"と言う形式なので、数字と単位を分け、数字のみ取得
		var amount = amount.split(' '); 
		var amount = amount[0];

		// 取得したprice要素が、"1,500 JPY"という形式なので、数字と単位を分け、数字のみ取得
		var price = price.split(' '); 

		// 単位を取得
		var currency = (price[1]);

		// もしカンマあったら、カンマの部分で数字を分ける
		var price = price[0].split(',');

		// 7桁以上の場合
		if ($(price[2]).is()){
			// 分けた数字を合体
			price = price[0]+price[1];
		} else{
			var price = price[0]+price[1];
		}

		// rate変数を作成、計算した値を代入
		var num = Math.floor(price/amount);
		num = num.toLocaleString();
		rate.push(num);

		// 最初の.buy要素への挿入がうまくいかず、一個ずれるので、nth-childの数字を1増やす
		var i = index + 1;
		
		// テーブルの横に挿入
		var order = 'nth-child(' + i +')';
		$('.buy.ng-scope:' + order + ' .progress').after("<div class='actual_rate'>" + rate[index] + ' ' + currency + "</div>");
		
	});

	// 表示崩れしないようスタイルを整形
	$(".buys-index .buys-list .buy .progress").css('width','200px');
	$(".actual_rate").css({'font-weight':'bold', 'display':'inline-block'});

	// もし"さらに読み込む"ボタンが押されたら
	$('div.load-more-button.ng-click-active').click(function(){

		alert('hello');

	});

});