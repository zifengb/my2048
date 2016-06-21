var calc = (function calc(){
	// 记录最新解锁的英雄
	var max = 0;
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
				text:'恭喜你成功解锁'+substractBy2(max)+'个英雄！fighting...'
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