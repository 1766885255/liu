$(function () {

    $('body').addClass(' bgPolicy');

    var code = 1;
    if (GetQueryString("cid") != undefined)
    {
        code = GetQueryString("cid");
    }
    var page = 1;
    if (GetQueryString("page") != undefined)
    {
        page = GetQueryString("page");
    }
    page = parseInt(page);
    //loadClass(JSON.parse(title));
    //console.log(code);

    var content = "";
    var classlist = "<div class=\"u10\"><div class=\"v1\">我提供的资讯包括：</div>";
    var dqclass = "";
    var dqremark = "";

    $.getJSON(config.server + "/AdminNews/getNews?code=" + code+"&page="+page+"&size=5", function (data) {
       // localStorage.setItem(config.data.news_class_key, JSON.stringify(data));
        loadNewsList(data);
    });

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }


    //加载数据
    function loadNewsList(data2) {
        var title = sessionStorage.getItem(config.data.news_class_key);

        if (title == null || title == "") {
            $.getJSON(config.server + "/AdminNews/getNewsClass", function (data) {
                sessionStorage.setItem(config.data.news_class_key, JSON.stringify(data));
                loadClass(data);
                loadContent(data2);
            });
        } else {
            loadClass(JSON.parse(title));
            loadContent(data2);
        }
    }
function loadContent(data3) {

		$.getJSON(config.server + "/Account/GetUserIsLogin", function (data) {
			if (data != "") {
				$.each(data3[1], function (i, item) {
					content += "<div class=\"u9\"><a href=\"../Insight/Detail?id=" + item["id"] + "\"><div class=\"v1\">"
					+ "<img src=\"../Upload/" + item["picture"] + "\" width=\"100%\"></div><div class=\"v2\">"
					+ "<div class=\"w1\">" + item["title"] + "</div><div class=\"w2\">" + item["description"] + "</div>"
					+ "<div class=\"w3\">" + item["author"] + "<span>" + item["time"] + "</span></div></div></a></div>";
				});
				content += "<div class=\"pager mt30 mb10\">"; //加载分页数据
				var total = data3[0];
				var totalpage = Math.ceil(total / 5);
				content += "<a href=\"../Insight/Index?cid=" + code + "&page=1&size=5\">首页</a>";
				var active = "class=\"active\"";

				if (isMobile()) {
					if (totalpage <= 5) {
						for (var i = 1; i <= totalpage; i++) {
							content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
						}
						var maxpage = i - 1;
						content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + maxpage + "&size=5\">尾页</a>";
					}
					else {

						if (page >= 4) {
							var stratObj = page + 2;
							var flag = false;

							if (stratObj < totalpage) {
								stratObj = page - 2;
								flag = true;
							}
							else {
								stratObj = totalpage - 4;
							}

							var endObg = stratObj + 4;
							content += "<span>•</span>";

							for (var i = stratObj; i <= endObg; i++) {
								if (i == endObg) {
									if (flag && endObg < totalpage)
										content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
						else {
							for (var i = 1; i <= 5; i++) {
								if (i == 5) {
									content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
					}
				}
				else {
					if (totalpage <= 10) {
						for (var i = 1; i <= totalpage; i++) {
							content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
						}
						var maxpage = i - 1;
						content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + maxpage + "&size=5\">尾页</a>";
					}
					else {

						if (page >= 6) {
							var stratObj = page + 4;
							var flag = false;

							if (stratObj < totalpage) {
								stratObj = page - 4;
								flag = true;
							}
							else {
								stratObj = totalpage - 9;
							}

							var endObg = stratObj + 9;
							content += "<span>•</span>";

							for (var i = stratObj; i <= endObg; i++) {
								if (i == endObg) {
									if (flag && endObg < totalpage)
										content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
						else {
							for (var i = 1; i <= 10; i++) {
								if (i == 10) {
									content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
					}
				}

				content += "</div>";
				//console.log(content);
				//$("div.l1").find("div.m1").find("div.pager").html(pagelist);

				//输出列表及分页
				$("div.l1").find("div.m1").html(content);
				//输出右侧数据文章类别
				$("div.l2").find("div.m1").html(classlist);

				//$("<script type=\"text/javascript\" src=\"./public/js/global.js\"></script>").appendTo("head");

			} else {
				$.each(data3[1], function (i, item) {
				if (item["classid"] == 6) {
					content += "<div class=\"u9\"><a href=\"../Account/UserLogin\"><div class=\"v1\">"
					+ "<img src=\"../Upload/" + item["picture"] + "\" width=\"100%\"></div><div class=\"v2\">"
					+ "<div class=\"w1\">" + item["title"] + "</div><div class=\"w2\">" + item["description"] + "</div>"
					+ "<div class=\"w3\">" + item["author"] + "<span>" + item["time"] + "</span></div></div></a></div>";
				} else {
					content += "<div class=\"u9\"><a href=\"../Insight/Detail?id=" + item["id"] + "\"><div class=\"v1\">"
					+ "<img src=\"../Upload/" + item["picture"] + "\" width=\"100%\"></div><div class=\"v2\">"
					+ "<div class=\"w1\">" + item["title"] + "</div><div class=\"w2\">" + item["description"] + "</div>"
					+ "<div class=\"w3\">" + item["author"] + "<span>" + item["time"] + "</span></div></div></a></div>";
				}
				});
				content += "<div class=\"pager mt30 mb10\">"; //加载分页数据
				var total = data3[0];
				var totalpage = Math.ceil(total / 5);
				content += "<a href=\"../Insight/Index?cid=" + code + "&page=1&size=5\">首页</a>";
				var active = "class=\"active\"";

				if (isMobile()) {
					if (totalpage <= 5) {
						for (var i = 1; i <= totalpage; i++) {
							content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
						}
						var maxpage = i - 1;
						content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + maxpage + "&size=5\">尾页</a>";
					}
					else {

						if (page >= 4) {
							var stratObj = page + 2;
							var flag = false;

							if (stratObj < totalpage) {
								stratObj = page - 2;
								flag = true;
							}
							else {
								stratObj = totalpage - 4;
							}

							var endObg = stratObj + 4;
							content += "<span>•</span>";

							for (var i = stratObj; i <= endObg; i++) {
								if (i == endObg) {
									if (flag && endObg < totalpage)
										content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
						else {
							for (var i = 1; i <= 5; i++) {
								if (i == 5) {
									content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
					}
				}
				else {
					if (totalpage <= 10) {
						for (var i = 1; i <= totalpage; i++) {
							content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
						}
						var maxpage = i - 1;
						content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + maxpage + "&size=5\">尾页</a>";
					}
					else {

						if (page >= 6) {
							var stratObj = page + 4;
							var flag = false;

							if (stratObj < totalpage) {
								stratObj = page - 4;
								flag = true;
							}
							else {
								stratObj = totalpage - 9;
							}

							var endObg = stratObj + 9;
							content += "<span>•</span>";

							for (var i = stratObj; i <= endObg; i++) {
								if (i == endObg) {
									if (flag && endObg < totalpage)
										content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
						else {
							for (var i = 1; i <= 10; i++) {
								if (i == 10) {
									content += "<span>•</span>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
								}
								else {
									content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
								}
							}
						}
					}
				}

				content += "</div>";
				//console.log(content);
				//$("div.l1").find("div.m1").find("div.pager").html(pagelist);

				//输出列表及分页
				$("div.l1").find("div.m1").html(content);
				//输出右侧数据文章类别
				$("div.l2").find("div.m1").html(classlist);

				//$("<script type=\"text/javascript\" src=\"./public/js/global.js\"></script>").appendTo("head");
			}
		})

    


       

    }
    function loadContent20170406bak(data) {
        $.each(data[1], function (i, item) {
            content += "<div class=\"u9\"><a href=\"../Insight/Detail?id=" + item["id"] + "\"><div class=\"v1\">"
            + "<img src=\"../Upload/" + item["picture"] + "\" width=\"100%\"></div><div class=\"v2\">"
            + "<div class=\"w1\">" + item["title"] + "</div><div class=\"w2\">" + item["description"] + "</div>"
            + "<div class=\"w3\">" + item["author"] + "<span>" + item["time"] + "</span></div></div></a></div>";
        });

        content += "<div class=\"pager mt30 mb10\">";

        //加载分页数据
        var total = data[0];
        var totalpage = Math.ceil(total / 5);
        content += "<a href=\"../Insight/Index?cid=" + code + "&page=1&size=5\">首页</a>";
        var active = "class=\"active\"";
        
        if (isMobile()) {
            if (totalpage <= 5) {
                for (var i = 1; i <= totalpage; i++) {
                    content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
                }
                var maxpage = i - 1;
                content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + maxpage + "&size=5\">尾页</a>";
            }
            else {

                if (page >= 4) {
                    var stratObj = page + 2;
                    var flag = false;

                    if (stratObj < totalpage) {
                        stratObj = page - 2;
                        flag = true;
                    }
                    else {
                        stratObj = totalpage - 4;
                    }

                    var endObg = stratObj + 4;
                    content += "<span>•</span>";

                    for (var i = stratObj; i <= endObg; i++) {
                        if (i == endObg) {
                            if (flag && endObg < totalpage)
                                content += "<span>•</span>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
                        }
                        else {
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
                        }
                    }
                }
                else {
                    for (var i = 1; i <= 5; i++) {
                        if (i == 5) {
                            content += "<span>•</span>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
                        }
                        else {
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
                        }
                    }
                }
            }
        }
        else {
            if (totalpage <= 10) {
                for (var i = 1; i <= totalpage; i++) {
                    content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
                }
                var maxpage = i - 1;
                content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + maxpage + "&size=5\">尾页</a>";
            }
            else {

                if (page >= 6) {
                    var stratObj = page + 4;
                    var flag = false;

                    if (stratObj < totalpage) {
                        stratObj = page - 4;
                        flag = true;
                    }
                    else {
                        stratObj = totalpage - 9;
                    }

                    var endObg = stratObj + 9;
                    content += "<span>•</span>";

                    for (var i = stratObj; i <= endObg; i++) {
                        if (i == endObg) {
                            if (flag && endObg < totalpage)
                                content += "<span>•</span>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
                        }
                        else {
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
                        }
                    }
                }
                else {
                    for (var i = 1; i <= 10; i++) {
                        if (i == 10) {
                            content += "<span>•</span>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\" " + (totalpage == page ? active : "") + ">" + totalpage + "</a>";
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + totalpage + "&size=5\">尾页</a>";
                        }
                        else {
                            content += "<a href=\"../Insight/Index?cid=" + code + "&page=" + i + "&size=5\" " + (i == page ? active : "") + ">" + i + "</a>";
                        }
                    }
                }
            }
        }

        content += "</div>";
        //console.log(content);
        //$("div.l1").find("div.m1").find("div.pager").html(pagelist);

        //输出列表及分页
        $("div.l1").find("div.m1").html(content);
        //输出右侧数据文章类别
        $("div.l2").find("div.m1").html(classlist);

        //$("<script type=\"text/javascript\" src=\"./public/js/global.js\"></script>").appendTo("head");

    }
        
        function loadClass(data) {
            $.each(data, function (i, item) {
                if (item["classid"] == code) {
                    dqclass = item["classname"];
                    dpremark = item["remark"];
                    classlist += "<div class=\"v2\"><a href=\"../Insight/Index?cid=" + item["classid"] + "\"  style=\" color:#000;\" >" + item["classname"] + "</a></div>";
                }
                else {
                    classlist += "<div class=\"v3\"><a href=\"../Insight/Index?cid=" + item["classid"] + "\" style=\" color:#999;\" >" + item["classname"] + "</a></div>";
                }
            });
            content = "<div class=\"u8\">" + dqclass + "</div>";
            classlist += "</div><div class=\"u11\">" + dpremark + "</div>"
            +"<div class=\"u12\"><div class=\"v1\">北京资舟投资基金管理有限公司</div><div class=\"v2\"><table><tr><td>总部地址：</td>"
            +"<td>北京市东城区东长安街1号<br>东方广场W1座八层</td></tr><tr><td>联系电话：</td><td>010-60846896</td></tr>"
            + "<tr><td>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</td><td>zizhouir@zi-zhou.com</td></tr></table></div></div>";
        }

        function isMobile() {
            if (navigator.userAgent.toLowerCase().indexOf("iphone") != -1 || navigator.userAgent.toLowerCase().indexOf("android") != -1) {
                return true;
            } else {
                return false;
            }
        }
    //function loadClass(data) {
    //    var headtitle = "";
    //    $.each(data, function (i, item) {
    //        headtitle += "<a href=\"Insight.html?cid=" + item["classid"] + "\">" + item["classname"] + "</a>";
    //    });
    //    $("div.l1").find("div.m1").html(headtitle);
    //}

});