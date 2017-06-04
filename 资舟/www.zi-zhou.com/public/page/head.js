var config = {
    //server: "http://localhost:20006/",
    server: "http://"+window.location.host,
    data: {
        news_class_key: "news_class",
        product_key: "product_key"
    }
}

$(function () {
var content = "";
/*
处理首页公司动态数据轮播的效果
*/
	$.getJSON(config.server + "/AdminNews/getNews?code=6&page=" + 1 + "&size=3", function (data) {
		// localStorage.setItem(config.data.news_class_key, JSON.stringify(data));
		loadHeadNewsList(data);
	});

	//加载首页公司动态数据
	function loadHeadNewsList(data2) {
		var title = sessionStorage.getItem(config.data.news_class_key);

		if (title == null || title == "") {
			$.getJSON(config.server + "/AdminNews/getNewsClass", function (data) {
				sessionStorage.setItem(config.data.news_class_key, JSON.stringify(data));
				loadHeadContent(data2);
			});
		} else {
			loadHeadContent(data2);
		}
	}



	function loadHeadContentOld20170406(data) {
		
		/*$.each(data[1], function (i, item) {
			if (i == 1) {
				content += "<li style=\"display: list-item;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src='https://www.yidaiyilu.gov.cn/wcm.files/upload/CMSydylgw/201703/201703191103007.png' /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

			} else {
				content += "<li style=\"display: none;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src='https://www.yidaiyilu.gov.cn/wcm.files/upload/CMSydylgw/201703/201703271115034.jpg' /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

			}
		});*/
                    
                  
		$.each(data[1], function (i, item) {
			if (i == 0) {
				//content += "<li style=\"display: list-item;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src=\"../Upload/" + item["picture"] + "\" /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";
				content += "<li style=\"display: list-item;\"><a href=\"javascript:void(0);\" target=\"_blank\"><img src='http://www.zi-zhou.com/Upload/1491384366.JPG' /><div class=\"title_slide_top\"> </div></a></li>";

			} else {
				content += "<li style=\"display: none;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src=\"../Upload/" + item["picture"] + "\" /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

			}
		});

		//输出列表及分页
		$("#slider_name ul").html(content);
		
	}
	
		function loadHeadContent(data3) {
		
		/*$.each(data[1], function (i, item) {
			if (i == 1) {
				content += "<li style=\"display: list-item;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src='https://www.yidaiyilu.gov.cn/wcm.files/upload/CMSydylgw/201703/201703191103007.png' /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

			} else {
				content += "<li style=\"display: none;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src='https://www.yidaiyilu.gov.cn/wcm.files/upload/CMSydylgw/201703/201703271115034.jpg' /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

			}
		});*/
		$.getJSON(config.server + "/Account/GetUserIsLogin", function (data) {
			if (data != "") {
				$.each(data3[1], function (i, item) {
					if (i == 0) {
						content += "<li style=\"display: list-item;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\"  target=\"_blank\"><img src=\"../Upload/" + item["picture"] + "\" /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

					} else {
						content += "<li style=\"display: none;\"><a href=\"../Insight/Detail?id=" + item["id"] + "\" target=\"_blank\"><img src=\"../Upload/" + item["picture"] + "\" /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

					}
				});
				//输出列表及分页
				$("#slider_name ul").html(content);
			} else {
				$.each(data3[1], function (i, item) {
					if (i == 0) {
						content += "<li style=\"display: list-item;\"><a href=\"../Account/UserLogin\"  target=\"_blank\"><img src=\"../Upload/" + item["picture"] + "\" /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

					} else {
						content += "<li style=\"display: none;\"><a href=\"../Account/UserLogin\" target=\"_blank\"><img src=\"../Upload/" + item["picture"] + "\" /><div class=\"title_slide_top\">" + item["title"] + "</div></a></li>";

					}
				});
				//输出列表及分页
				$("#slider_name ul").html(content);
			}
		});
                  

		
	}

    //var product = sessionStorage.getItem(config.data.product_key);
    //if (product == null || product == "") {
    //    $.getJSON(config.server + "/AdminProduct/GetProductAll", function (data) {
    //        sessionStorage.setItem(config.data.product_key, JSON.stringify(data));
    //        loadProduct(data);
    //    });
    //} else {
    //    loadProduct(JSON.parse(product));
    //}

    var title = sessionStorage.getItem(config.data.news_class_key);
    //console.log(title);
    if (title == null || title == "") {
        $.getJSON(config.server + "/AdminNews/getNewsClass", function (data) {
            sessionStorage.setItem(config.data.news_class_key, JSON.stringify(data));
            loadClass(data);
            loadUser();
        });
    } else {
        loadClass(JSON.parse(title));
        loadUser();
    }

    function loadUser() {
        var usertitle = "";
        var product = "";
        $.getJSON(config.server + "/Account/GetUserIsLogin", function (data) {
            if (data != "") {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    usertitle += "<a href=\"/UserCenter\">" + data + "</a>";
                } else {
                    usertitle += "<a href=\"/UserCenter\">" + data + "</a>&nbsp;&nbsp;&nbsp;<a href=\"/Account/UserLogin?type=logout\" class=\"w1\">退出</a>";
                }

                product += "<a href=\"javascript:;\" class=\"smallnav\">产品</a>" +
                                       "<div class=\"pdtlist\">"+
                                       "<div class=\"pdtA\"><a href=\"../Product\">净值表现</a><span></span></div>" +
                                       "<div class=\"pdtA\"><a href=\"../UserCenter/Batch\">活动预约</a><span></span></div>"+
                                        "</div>"
                $("div.nav div.v1 ul li").eq(1).html(product);

                $(".phone .nav .v1>ul>li>a.smallnav").eq(0).click(function () {
                    $(this).toggleClass('hover').parent('li').siblings().find('.smallnav').removeClass('hover');
                    $(this).parent('li').find('.pdtlist').slideToggle().parent('li').siblings().find('.pdtlist').slideUp();
                });
            }
            else {
                //if (window.location.href.indexOf("productDetail") > -1) {
                //    location.href = '../Account/UserLogin';
                //}
                usertitle += "<a href=\"/Account/UserRegister\">注册</a><span>|</span><a href=\"/Account/UserLogin\">登录</a>";
            }
            $("#header .nav .v2").find("div").eq(0).html(usertitle);
        });
    }

    function loadClass(data) {
        var headtitle = "";
        $.each(data, function (i, item) {
           if (i == 2||i==3) {
        	} else {
        		headtitle += "<div class=\"pdtA\"><a href=\"../Insight?cid=" + item["classid"] + "\">" + item["classname"] + "</a><span></span></div>";
        	}
        	   });
        $("div.nav div.v1 ul").find(".pdtlist").eq(0).html(headtitle);
    }

    function loadProduct(data) {
        console.log(data);
        var headtitle = "";
        var mobile_content = "<div class=\"v3\">";
        var num = 0;
        var m_data = new Array();
        var q_data = new Array();

        $.each(data, function (i, item) {
            if (item["pro_pid"] == 0) {
                if (item["pro_name"] != "瞰金24号" && item["pro_name"] != "峪源量化2号") {
                    m_data.push(item);
                }
                else {
                    q_data.push(item);
                }
            }
        });
        //母基金
        $.each(m_data, function (i, item) {
            i++;
            var z_content = "";
            var id = item["id"];
            var a=0;
            z_content += "<div class=\"pdtBbox\" >";
            mobile_content += "<ul id=\"subnav_0" + i + "\">"
            num = i;
            $.each(data, function (j, item2) {
                if(j==0){
                    a++;
                    z_content +="<ul class=\"pdtB\">";
                    z_content +="<li><a href=\"../productDetail.html?id=" + item["id"] + "\">"+item["pro_name"]+"-母基金"+"</a></li>";
                    mobile_content += "<li class=\"parent-fund\"><a href=\"../productDetail.html?id=" + item["id"] + "\">" + item["pro_name"] + "-母基金" + "</a></li>";
                }
                if (item2["pro_pid"] == id) {
                    if(a==3){
                        a=0;
                        z_content +="</ul><ul class=\"pdtB\">";
                    }
                    z_content += "<li><a href=\"../productDetailSub.html?id=" + item2["id"] + "\">" + item2["pro_name"] + "</a></li>";
                    mobile_content += "<li class=\"subfunds\"><a href=\"../productDetailSub.html?id=" + item2["id"] + "\">" + item2["pro_name"] + "</a></li>";
                    a++;
                }
            });

            z_content += "</ul><div class=\"clesrfix\"></div></div>";
            mobile_content += "</ul>";

            headtitle += "<div class=\"pdtA\"><a href=\"javascript:;\" class=\"nav-m\" >" + item["pro_name"] + "</a>" +
                                        "<span class=\"iconR\"></span>" + z_content + "</div>";
        });
        //其他
        qt_content = "<div class=\"pdtBbox\" ><ul class=\"pdtB\">";
        mobile_content += "<ul id=\"subnav_0" + (num +1) + "\">"

        $.each(q_data, function (i, item) {
            qt_content += "<li><a href=\"../productDetail.html?id=" + item["id"] + "\">" + item["pro_name"] + "</a></li>";
            mobile_content += "<li class=\"subfunds\"><a href=\"../productDetail.html?id=" + item["id"] + "\">" + item["pro_name"] + "</a></li>";
        })
        mobile_content += "</ul>"

        qt_content += "</ul><div class=\"clesrfix\"></div></div>"
        headtitle += "<div class=\"pdtA\"><a href=\"javascript:;\" class=\"nav-m\" >往期产品</a>" +
                                        "<span class=\"iconR\"></span>" + qt_content + "</div>";

        mobile_content += "</div>"

        $("div.nav div.v1 ul").find(".pdtlist").eq(0).html(headtitle);
        $("div.nav").append(mobile_content);
        //alert($("div.nav").find("div.v1").find("div").eq(0).find("div").html())
    }

});
