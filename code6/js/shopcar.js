/**购物车js文件 */
$(function(){
    // 1.全选
    /**
     * 1.点击全选 获取下面所有单选框，且所有单选框行为一致，最下面的全选框也要一致
     */
    var $theadInput = $('table thead input[type=checkbox]');//toubu
    var $bodyInput = $('table tbody input[type=checkbox]');//zhongjian
    var $allPriceInput = $('.totalPrice input[type=checkbox]');//jiesuan
    $theadInput.change(function(){
///获取选中状态
    var state = $(this).prop('checked');
    
//单选框保持一致
$bodyInput.prop('checked',state);

//结算选择框
$allPriceInput.prop('checked',state);
        })

    //2.结算中的选择框
    $allPriceInput.change(function(){
        //获取选中状态
        var state = $(this).prop('checked');
        //单选框保持一致
        $bodyInput.prop('checked',state);

    //结算选择框
    $theadInput.prop('checked',state);
    })

    //表格中的选择框
    $bodyInput.change(function(){
        var flag = true;
        var totalPrice = 0;
        //循环表格中的
        $bodyInput.each(function(i,input){
        if(!$(input).prop('checked')){
            flag = false;
        }else{
            totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
        }
        })
        //改变全选框

        $theadInput.prop('checked',flag)
        $allPriceInput.prop('checked',flag)

        //daoduiyinweizhi
        $('.total').text( totalPrice.toFixed(2))
    })



    //小计数量加减
    $('.add').on('click',function(){
        //下一个input节点
        var $nextInput = $(this).next();
//获取输入框的值
        var oldVal =parseInt($nextInput.val());
        //自增
        oldVal++;
        //重新赋值
        $nextInput.val(oldVal);
   
        //小计
        var subtotal = oldVal * parseFloat( $(this).closest('tr').find('.price').text()).toFixed(2); 
    //把小计放入
    $(this).closest('tr').find('.subprice').text(subtotal.toFixed(2));
  })




     $('.reduce').on('click',function(){
        //上一个input节点
        var $prevInput = $(this).prev();
//获取输入框的值
        var oldVal =parseInt( $prevInput.val());
        //自增
        oldVal--;
        oldVal = oldVal < 1 ? 1 : oldVal/**if (oldVal < 1){oldVal = 1}*/
              //重新赋值
        $prevInput.val(oldVal);  
        
                //小计
                var subtotal = oldVal * parseFloat( $(this).closest('tr').find('.price').text()).toFixed(2); 
                //把小计放入
                $(this).closest('tr').find('.subprice').text(subtotal.toFixed(2));

    })
    
    //抽取小计函数
    function subTotalPrice(val,dom){
        var subtotal = val * parseFloat( dom.closest('tr').find('.price').text()); 
        //把小计放入
       dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }
    
    //删除
    $('.del').click(function(){
    $(this).closest('tr').remove()
    })

    //计算总计
    $bodyInput.each(function(i,input){
        var totalPrice = 0;
        //判断选中状态
        if ($(input).prop('checked')){
            totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
        }
    })
})