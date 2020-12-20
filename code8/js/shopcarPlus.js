/**购物车功能js文件 */
$(function(){
    //先获取
    var $theadInput = $('thead input[type=checkbox]');//表头的全选
    var $tbodyInputs = $('tbody input[type=checkbox]');//表格中的每一行的选择框
    var $totalPriceInput = $('.totalPrice input[type=checkbox]');//计算总价中的全选框
    
    
    /**全选 */
    /**
     * 表头中的全选按钮 绑定点击事件 
     * 给表格中的每一行数据选择框
     * 给计算总价中的全选框
     */
    $theadInput.change(function(){
        var checkState = $(this).prop('checked');

        $tbodyInputs.prop('checked',checkState);
        $totalPriceInput.prop('checked',checkState);

        allTotal();
    });

    /**计算总价的全选
     * 给计算总价的全选按钮 绑定事件
     * 把状态给表头的全选
     * 把状态给表格的选择框
    */
   $totalPriceInput.change(function(){
       var checkState = $(this).prop('checked');

       $theadInput.prop('checked',checkState);
       $tbodyInputs.prop('checked',checkState);
       
       allTotal();
   });


   /**
    * 表格中的选择框反影响全选框
    * 给表格中的选择框绑定点击事件
    * 循环表格中的选择框
    * 获取选择框的选择状态
    * 把值赋给全选框
    */
   $tbodyInputs.change(function(){
       var flag = true;
       $tbodyInputs.each(function(index,input){
           var checkState = $(this).prop('checked');
           if(checkState === false) {
           flag = false;
           }
       })
       $theadInput.prop('checked',flag);
       $totalPriceInput.prop('checked',flag);
   })

       allTotal();

   /**
    * 加法功能
    * 获取+按钮，绑定点击事件
    * 点击的时候获取后面的
    * 输入框的值自增
    * 自增值赋给后面的输入框
    */
   $('.add').click(function (){
       var count = parseInt($(this).next().val());
       count++;
       $(this).next().val(count);

       //小计
       subTotal($(this),count);

       allTotal();
   })
/**
 * 减法功能
 */
   $('.reduce').click(function (){
    var count = parseInt($(this).prev().val());
    count--;
    count = count < 1 ? 1 :count;
    $(this).prev().val(count);

    subTotal($(this),count);

    allTotal();
})

/*
    封装一个小计函数：（）
 */
    function subTotal(dom,count){
        var singlePrice =parseFloat(dom.closest('tr').find('.price').text());

        var subTotalPrice = singlePrice * count;
        dom.closest('tr').find('.subPrice').text(subTotalPrice.toFixed(2))
    }


    /**
     * 总计功能实现:()
     * 定义一个变量 保存总价 保存数量
     * 获取表格中的选择框状态
     * 选中累加小计
     */
    function allTotal(){
        var allPrice = 0;
        var selectedCount = 0;

        $('tbody input[type=checkbox]').each(function(){
            var checkState = $(this).prop('checked');
            if(checkState){
                allPrice += parseInt($(this).closest('tr').find('.subPrice').text());
                selectedCount++;
            }
        })
            $('.total').text(allPrice.toFixed(2));
            $('.count').text(selectedCount);
    }



    /**
     * 删除
     */
    $('.del').click(function(){
        $(this).closest('tr').remove()
    })

    //删除选中
    $('.dlete').click(function(){
        $('tbody input[type=checkbox]').each(function(){
            var checkState = $(this).prop('checked');
            if(checkState){
            $(this).closest('tr').remove();
            }
        }) 
        getGoodsCount();
        allTotal();
    })


    //全部商品
    function getGoodsCount(){

        //获取数量
        var goodsCount = $('table tbody tr').length;

        $('.goodsCount').text(goodsCount);
    }

    getGoodsCount();//页面加载调用

})
