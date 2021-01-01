/**
 * B2C首页
 */
//页面加载成功
$(function(){
    /*首页大图轮播 */
    $('#banner').tyslide({
        boxh:460,//盒子的高度
				w:1000,//盒子的宽度
				h:390,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:20,//控制按钮高度
				radius:10,//控制按钮圆角度数
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
				isShowNum:true //是否显示数字
	});

	/**图书电子书小轮播 */
		$('#ebooks-banner').tyslide({
			boxh:223,//盒子的高度
					w:332,//盒子的宽度
					h:223,//图片的高度
					isShow:true,//是否显示控制器
					isShowBtn:true,//是否显示左右按钮
					controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
					controlsW:20,//控制按钮宽度
					controlsH:4,//控制按钮高度
					controlsColor:"#d7d7d7",//普通控制按钮的颜色
					controlsCurrentColor:"green",//当前控制按钮的颜色
		});
		/**新书手风琴 */
		$('.ebooks .right-box ul > li').mouseenter(function(){
			//所有标题隐藏详情
			$(this).siblings().find('.desc').slideUp();//隐藏详情
			$(this).siblings().find('.ebooks-title').slideDown();

			//当前：隐藏标题 显示详情
			$(this).find('.eboos-title').slideUp();
			$(this).find('.desc').slideDown();
		});
		
	/**服装小轮播 */
	$('#clothes-banner').tyslide({
		boxh:340,//盒子的高度
				w:429,//盒子的宽度
				h:340,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:4,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"green",//当前控制按钮的颜色
	});
	/**户外运动轮播 */
	$('#sports-banner').tyslide({
		boxh:340,//盒子的高度
				w:429,//盒子的宽度
				h:340,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:4,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"green",//当前控制按钮的颜色
	});
	/**童装轮播 */
	$('#child-banner').tyslide({
		boxh:340,//盒子的高度
				w:429,//盒子的宽度
				h:340,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:4,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"green",//当前控制按钮的颜色
	});
	    // 推广商品交互
		$('.promotion .promotion-title ul li').mouseenter(function() {
			//导航激活类切换
			$(this).addClass('active').siblings().removeClass('active');
			//内容切换
			// 获取对应索引
			var index = $(this).index();
			console.log(index); // 0 => left:0, 1 => left:-1 * -1170
			// 左右移动
			$('.promotion .promotion-content .inner-box').animate({
				'left': -index * 1170
			})
		});
		// 返回顶部
		// 绑定滚动事件
		$(document).scroll(function() {
				//获取距离顶部的位置
				var topDistance = $('html, body').scrollTop();
				if (topDistance > 500) {
					$('.backToTop').show();
				} else {
					$('.backToTop').hide();
				}
			})
			// 返回顶部
		$('.backToTop').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 300)
		});


	/**二维码滑动 */
	$('.qr-code .tikect').hover(function(){
		//出来
		$('.qr-code div').animate({
			left:'-100'
		})
	},function(){
		$('.qr-code div').animate({
			left:0
		})
	});

	/**顶部搜索框交互 */
	$(document).scroll(function(){
		//获取到顶部的距离
		var topDistance = $('html,body').scrollTop();
		if(topDistance > 450){
			$('.top-search-input').slideDown(300)
		}else{
			$('.top-search-input').slideUp(300)
		}
	});

	/**楼梯跳转 */
	$('.floor li').click(function(){
		//获取索引
		var index = $(this).index();
		//选中每一个板块到顶部偏移
		var topOffset = $('.floors').eq(index).offset().top;

		//滚动条滚到位置
		$('html,body').animate({
			scrollTop:topOffset
		})
	})
})