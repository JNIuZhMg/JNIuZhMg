/**
 * 封装星级评分
 */
$(function(){

    //创建星星的函数
    window.createStarRate = function(score){
    //$.fn.createStarRate = function(score) {

    //满星
    var on = '<span class="on iconfont icon-xingxing"></span>';
    //半星
    var half = '<span class="half iconfont icon-star-half"></span>';
    //灰星
    var off = '<span class="off iconfont icon-xingxing"></span>';


    //样式
    $(on).css({
        fontSize: '40px',
        color: '#ff6700'
    });
    $(half).css({
        fontSize: '30px',
        color: 'ff6700'
    });
    $(off).css({
        fontSize:'40px',
        color: '#ccc'
    })


    //计算分数
    var calcScore = Math.floor(score * 2) / 2;
    
    //计算满星
    var onCount = Math.floor(calcScore);

    //计算半星
    var isHasHalf = 0;
    if(calcScore % 1 !== 0){
       isHasHalf = 1;
    }

    //计算灰色的星星
    var offCount = 5 - onCount -isHasHalf;

    //拼接结果
    var rst = '';
    for (var i = 0; i < onCount;i++){
        rst += on;
    }
    if (isHasHalf === 1){
        rst += half;
    }
    for (var k = 0; k < offCount; k++){
        rst += off;
    }
    
    return rst;


    //$(this).html(rst);
    }


})