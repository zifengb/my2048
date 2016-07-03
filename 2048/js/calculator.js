var calc = (function calc(){
	// 记录最新解锁的英雄
	var max = 0;

	var herolist = {
		1:{
			// description:,
			imageUrl:'Teemo.png'
		},
		2:{
			// description:,
			imageUrl:'pbe0307_02.png'
		},
		3:{
			// description:,
			imageUrl:'Leona_Square_0.png'
		},
		4:{
			// description:,
			imageUrl:'LeeSin_Square_0.png'
		},
		5:{
			// description:,
			imageUrl:'Thresh_Square_0.png'
		},
		6:{
			// description:,
			imageUrl:'1385536285032.png'
		},
		7:{
			// description:,
			imageUrl:'Pantheon_Square_0.png'
		},
		8:{
			// description:,
			imageUrl:'Lulu_Square_0.png'
		},
		9:{
			// description:,
			imageUrl:'MonkeyKing_Square_0.png'
		},
		10:{
			// description:,
			imageUrl:'Khazix_Square_0.png'
		},
		11:{
			// description:,
			imageUrl:'Vi_Square_0.png'
		}
	}


	return function (){
		// 获取英雄的权值列表
		var list = document.getElementsByClassName('tile-inner');
		var values = [];
		for (var i = 0 , len = list.length , elem = list[0]; elem = list[i++]; ) {
		  values.push(Math.round(elem.innerHTML));
		};
		// 排序
		values.sort(function (a,b){
			return a-b;
		});

		var last = values[list.length-1];
		
		// 替换最大权值
		if(last > max){
			max = last;
			// alert('解锁了第'+substractBy2(max)+'个英雄！');
			swal({
				title:'Congratulation',
				text:'恭喜你解锁了第'+substractBy2(max)+'个英雄！继续努力！！！',
				imageUrl:'img/'+herolist[substractBy2(max)].imageUrl
			});
		}
	}
})();

function substractBy2(num){
	var n = 0;

	while(num % 2 === 0){
		num = num / 2;
		n++;
	}

	return n;
}