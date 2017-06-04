$(function () {

    var content = "";

    $.getJSON(config.server + "/AdminJob/GetJobAll/", function (data) {
        // localStorage.setItem(config.data.news_class_key, JSON.stringify(data));
        loadJob(data);
    });


    //加载数据
    function loadJob(data) {

        content += "<table>";

        $.each(data, function (i, item) {
            content += "<tr data-href=\"../About/JoinDetail?id=" + item["id"] + "\"><td>" + item["title"] + "</td><td>" + item["address"] + "</td><td>" + item["salary"] + "</td>" +
                "<td>" + item["date"] + "</td><td class=\"arrow\"><img src=\"../public/images/18.png\"></td></tr>"
        });
        content += "</table>";

        $("div.container").find("div.u15").find("div.v2").html(content);

        //$("<script type=\"text/javascript\" src=\"../public/js/global.js\"></script>").appendTo("head");

        $('.u15 .v2 tr').on('mouseover', function () {
            $(this).find('.arrow img').attr('src', '../public/images/19.png');
        })
        $('.u15 .v2 tr').on('mouseout', function () {
            $(this).find('.arrow img').attr('src', '../public/images/18.png');
        })
        $('.u15 .v2 tr').on('click', function () {
            window.location.href = $(this).attr('data-href');
        })

    }

});