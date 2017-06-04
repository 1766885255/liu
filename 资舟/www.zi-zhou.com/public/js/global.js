$(function () {
    $('#page').css({ 'visibility': 'visible' });

    if(parseInt($(window).width())>768){//电脑
        $('body').removeClass('phone');
        $('.nav').show();
        $('.displayNav').removeClass('active');
        $('.nav .v1>ul .pdtA>a').addClass('nav-m');

        $('.nav .v3 li:nth-child(1)').hide();
        $(".nav .v3").hide();  

    }else{//phone
        $('body').addClass('phone');
        $('.nav').hide();
        $('.displayNav').addClass('active');
        $('.nav .v1>ul .pdtA>a').removeClass('nav-m');

        $('.phone .v3 ul').prepend('<li class="close"><a href="javascript:;" class=""><< 返回</a></li>');
        $('.pdtlist').hide();

    }
    $(window).resize(function(e) {
        if(parseInt($(window).width())>768){//电脑
            $('body').removeClass('phone');
            $('.nav').show();
            $('.displayNav').removeClass('active');
            $('.nav .v1>ul .pdtA>a').addClass('nav-m');

            $('.nav .v3 li:nth-child(1)').hide();
            $(".nav .v3").hide();

        }else{//phone
            $('body').addClass('phone');
            $('.nav').hide();
            $('.displayNav').addClass('active');
            $('.nav .v1>ul .pdtA>a').removeClass('nav-m');

            $('.phone .v3 ul').prepend('<li class="close"><a href="javascript:;" class=""><< 返回</a></li>');
            $('.pdtlist').hide();
        }
        $('.k1>.l2').height($('.k1>.l1').height());
    });

    //$('.displayNav').bind('tapone', function () {
    //    if (!$(this).hasClass('active')) {
    //        $(this).toggleClass('hover').siblings().find('a').removeClass('hover');
    //        $('.phone .nav .v1>ul .pdtlist').hide();
    //        $('.nav').slideUp(400);
    //        $(this).toggleClass('active');
    //    }else{
    //        $('.nav').slideDown(400);
    //        $(this).toggleClass('active');
    //    }
    //});

    $('.displayNav').on('click', function () {
        console.log(11);
        if (!$(this).hasClass('active')) {
            $(this).toggleClass('hover').siblings().find('a').removeClass('hover');
            $('.phone .nav .v1>ul .pdtlist').hide();
            $('.nav').slideUp(400);
            $(this).toggleClass('active');
        } else {
            $('.nav').slideDown(400);
            $(this).toggleClass('active');
        }
    });

    $('.k1>.l2').height($('.k1>.l1').height());
    var navThat;
    if($('.phone .nav .v1>div').hasClass('active')){
        $('.phone .nav .v1>div.active>div').show();
    }
    $('.nav .v1>div>span').on('click',function(){
        if($('body').hasClass('phone')){
            navThat = $('.nav .v1>div.active>div');
            if($(this).parent().hasClass('active')){
                if($(this).next().hasClass('active')){
                    $(this).next().slideDown(400);
                    $(this).parent().toggleClass('active');
                }else{
                    $(this).next().slideUp(400);
                    $(this).parent().toggleClass('active');
                }
            }else{
                $('.nav .v1>div').removeClass('active');
                $(this).parent().toggleClass('active');
                navThat.slideUp(400);
                $(this).next().slideDown(400);
            }
        }
    });
    
    
    //    by Tracy 10-19 
    //    登录注册账户页面
    var n = $(".maincont").height();
    $(".sidebar").height(n);
    
    //    头部导航
    //$(".displayNav").click(function(){
    //    $(".nav").slideToggle();
    //});
    
   
    
    //    点击下拉
    $(".iphone .sideNav .selectNav a").click(function(){
        $(".sideNav ul").removeClass("disNone").slideToggle();
        var k = $(".iphone .sideNav ul a").html();
        $(this).html(k);
    });
    
    //    点击选择radio
    $(".contentInfo .editInfo .editCont .sex").click(function(){
        $(this).find('b').addClass('active').parents().siblings().find('b').removeClass('active');
    });
    
    //    点击出现身份信息
    $('.edit').click(function () {

        var obj = $(this).parents('li').find('.VerifNewphone').css("display");
        if (obj == "block") {
            $(this).parents('li').find('.VerifNewphone').hide();
            $(this).toggleClass('addActive');
            $(this).parent().find('label').toggle();
        }
        else {
            $(this).parents('li').find('.Verification01').fadeToggle();
            $(this).toggleClass('addActive');
            $(this).parent().find('label').toggle();
        }
    });
    $('.setting .add .edit').click(function(){
        $(this).parents('li').find('.Verification01').fadeToggle();
        $(this).toggleClass('addActive');
        $(this).parent().find('label').toggle();
    });
    
    //    点击后记住密码
    $('.form-field .rememberMm label').click(function(){
        $(this).parent().find('.remember').toggleClass('active');
    });
     
    //    下拉
    $('.phone .sideNav .selectC label').click(function(){
        $('.phone .sideNav ul.selectLi').fadeToggle();
    });

    var JPlaceHolder = {
        //检测
        _check: function () {
            return 'placeholder' in document.createElement('input');
        },
        //初始化
        init: function () {
            if (!this._check()) {
                this.fix();
            }
        },
        //修复
        fix: function () {
            jQuery(':input[placeholder]').each(function (index, element) {
                var self = $(this), txt = self.attr('placeholder');
                self.wrap($('<div></div>').css({ position: 'relative', zoom: '1', border: 'none', background: 'none', padding: 'none', margin: 'none' }));
                var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
                var holder = $('<span></span>').text(txt).css({ position: 'absolute', left: pos.left, top: pos.top, height: h, lienHeight: h, paddingLeft: paddingleft, color: '#aaa' }).appendTo(self.parent());
                self.focusin(function (e) {
                    holder.hide();
                }).focusout(function (e) {
                    if (!self.val()) {
                        holder.show();
                    }
                });
                holder.click(function (e) {
                    holder.hide();
                    self.focus();
                });
            });
        }
    };
    //执行
    jQuery(function () {
        JPlaceHolder.init();
    });
});

//弹层
function showLayer(){
    setTimeout(function(){
        $('.edit-OK').toggle()
    },300);
    setTimeout(function(){
        $('.edit-OK').toggle()
    },2000);
}


/*by Tracy 03-24 菜单增加子产品*/
$(function () {
    //移动端点击主菜单，出现母产品
    $(".phone .nav .v1>ul>li>a.smallnav").click(function () {
        $(this).toggleClass('hover').parent('li').siblings().find('.smallnav').removeClass('hover');
        $(this).parent('li').find('.pdtlist').slideToggle().parent('li').siblings().find('.pdtlist').slideUp();
    });

    $(".phone .nav .v3 ul li.close a").click(function () {
        $(this).parents('ul').removeClass('hover');
        $(this).parents().find('.v1').show().parents().find('.v2').show();

    });

    //点击母产品，出现子产品,母产品消失
    $(".phone .nav .v1>ul .pdtA .iconR").click(function () {
        var ex = $(this).parent().index() + 1;
        $(this).parents().find(".mainnav").hide();
        $(this).parents().find("#subnav_0" + ex).addClass('hover');
    });


    //pc端    
    $('.pdtA').hover(function () {
        if ($(this).find('.pdtBbox').css('display') == "block") {
            $(this).find('.nav-m').css('background', '#f3f3f3');
        } else {
            //$(this).find('.nav-m').css('background', '#fff');
        }
    });


    var widths = $(".pdtBbox #pdtB1").width();
    //    alert(widths);
    //    $(".#pdtB2").css({left:widths+"px"});

    
    
    /*by Tracy 20160614 */
//    身份验证
    $(".verify-chose").click(function(){
        $(this).next(".verify-radio").slideToggle();
    });
    $(".verify-radio li").click(function(){
        var ex = $(this).find("label").html();
        $(this).parents(".form-field").find(".verify-chose").html(ex);
        $(this).parent(".verify-radio").slideToggle();
        $(this).parents(".verifyRadioBox").find(".verify-chose").html(ex);
    });
    
    
    /*by Tracy 20160616*/
    //协议弹层
    $(".form-field .rememberMm b").click(function(){
        $(".layerbox").fadeIn();
    });
     $("#agreement.layer .icon-close").click(function(){
        $(".layerbox").fadeOut();
    });
    //响应式弹窗居中
    if($(window).width()>800){
        $("#agreement .edit-OK").css({"left":"50%","margin-left":"-400px"});
    }else{
        $("#agreement .edit-OK").css({"margin":"0 10%"});
    }
    



    /*by Tracy 20160630*/
    //账户
    $(".point_detail .more").click(function(){
                if($(this).find("span").html()=="更多"){
                  $(this).parent().next(".pointMore-detail").show();
                  $(this).find("span").html("收起"); 
                  $(this).find("i").addClass("icon-up");
            }else{
                  $(this).parent().next(".pointMore-detail").hide();
                   $(this).find("span").html("更多");
                  $(this).find("i").removeClass("icon-up"); 
            }
     }); 

    //预约信息弹窗
    $(".layerbox_frame .layer_close").click(function(){
        $(this).parents(".layerbox").fadeOut();
    });


    $(".contentInfo .maincont .mall_sort .point_buy").click(function(){
        $(this).toggleClass("hover");
    });


});




$(function(){
//验证手机号
 $phone = $('#phone'),
 $btn = $('.formtable li .tableBtn'),
 pattern = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;//手机正则表达式
 regular_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//邮箱正则表达式

 $phone.on('keyup',function(){
        var m = $.trim($(this).val());
        ver_phone(m);
 });

 $btn.on('click',function(){
        var phone = $.trim($phone.val());
        if(phone.length==0 || !pattern.test(phone)){
            $btn.parent().parent().find('li').eq(0).show().html('<b class="iconW"></b>手机号码格式填写错误，请重新输入');
            return;
        }
        //$('form').submit();
 });

 function ver_phone(mobile){
        if(mobile.length==11){
            if(!pattern.test(mobile)){
                $phone.parent().parent().find('li').eq(0).show().html('<b class="iconW"></b>手机号码格式填写错误，请重新输入');
                $(this).next().hide();
            }else{
                $phone.parent().parent().find('li').eq(0).hide().find('b').html('');
                $phone.next().show();
            }
        }else{
            $phone.parent().parent().find('li').eq(0).hide().find('b').html('');
            $phone.next().hide();
        }
 }
});