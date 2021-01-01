/**
 * 注册
 */
$(function(){
    //调用
    $('#registerForm').validate({
        //验证规则
        rules:{
            //用户名验证
            username: {
        required:true,            //非空
        rangelength:[3,6]       //长度验证          
            },

            //密码验证
            password:{
                required:true,
                isPassword:true  
            },

            //确认密码
            checkPassword:{
                required:true,
                equalTo:'#password'   //验证密码一致性
            },
            tel:{
                required:true,
                isTel:true  
            }
        },
        //提示信息
        messages:{
            //用户名提示信息
            username:{
                required:'用户名不得为空',             //非空提示
                rangelength:'长度不能超过六个字'         //长度提示
            },

            //密码提示
            password:{
                required:'密码不得为空',
            },
             //确认密码
            checkPassword:{
                required:'确认密码不为空', //非空
                equalTo:'password'   //
            },
            tel:{
                required:'不能为空',
                isTel:'电话号码格式不对'  
            },
        }
    })
 
    //密码自定义验证
    jQuery.validator.addMethod('isPassword',function(value,element){
         var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    },'亲!输入5-10个以字母开头、可带数字、“_"、".”的字串哟!');
});
        //手机号验证
        jQuery.validator.addMethod('isTel',function(value,element){
            var telReg = /^[1]+[3,8]+\d{9}$/;
           return this.optional(element) || (telReg.test(value));
    });
