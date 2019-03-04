$(function () {
  $('#fullpage').fullpage({
    afterLoad: function (anchorLink, index) {
      switch (index) {
        case 2:
          $(".p2 .p2_word").css({"animation": "word 1s", "opacity": "1"})
          break;
        case 3:
          movelineInP3();
          $(".p3 .p3_1").css({"animation": "word 1s", "opacity": "1"})
          setTimeout(function () {
            $(".p3 .p3_2_bg").css({"animation": "word 1s", "opacity": "1"})
            typing("p3_2_speak", p3_str1, 0)
          }, 1000);
          setTimeout(function () {
            $(".p3 .p3_3_bg").css({"animation": "word 1s", "opacity": "1"})
          }, 3500);
          setTimeout(function () {
            typing("p3_3_speak", p3_str2, 0)
          }, 4000)
          setTimeout(function () {
            $(".p3 .p3_4_bg").css({"animation": "word 1s", "opacity": "1"})
          }, 7000);
          setTimeout(function () {
            typing("p3_4_speak", p3_str3, 0)
          }, 8000)
          setTimeout(function () {
            $(".p3 .p3_6").css({"animation": "word 1s", "opacity": "1"})
          }, 13000);
          setTimeout(function () {
            $(".p3 .p3_5").css({"animation": "word 1s", "opacity": "1"})
          }, 14000);

          break;
        case 4:
          movelineInP4();
          $(".p5 .line, .p5 .p5_bg2, .p5 .SP5 ").addClass("grayscale_animation")
          $(".p5 .music").addClass("music_animation")
          $(".p5 .scroll").addClass("scroll_animation")
          $(".p5 .music, .p5 .scroll, .p5 .portrait, .p5 .line, .p5 .p5_bg2, .p5 .SP5").css("-webkit-filter", "grayscale(0%)")
          $(".p5 .p5_1").css({"animation": "word 1s", "opacity": "1"})
          setInterval(function () {
            $(".p5 .p5_2").css({"animation": "word 1s", "opacity": "1"})
          }, 1000)
          break;
        case 5:
          $(".p6 .line, .p6 .p6_bg2, .p6 .SP6").addClass("grayscale_animation")
          $(".p6 .music").addClass("music_animation")
          $(".p6 .scroll").addClass("scroll_animation")
          $(".p6 .portrait").addClass("grayscale_animation")
          $(".p6 .music, .p6 .scroll, .p6 .portrait, .p6 .line, .p6 .p6_bg2, .p6 .SP6").css("-webkit-filter", "grayscale(0%)")
          $(".p6 .p6_1").css({"animation": "word 1s", "opacity": "1"})
          setInterval(function () {
            $(".p6 .p6_3").css({"animation": "word 1s", "opacity": "1"})
          }, 1000)
          break;
        case 6:
          $(".p7 .line, .p7 .p7_bg2, .p7 .SP7").addClass("grayscale_animation")
          $(".p7 .music").addClass("music_animation")
          $(".p7 .scroll").addClass("scroll_animation")
          $(".p7 .portrait").addClass("grayscale_animation")
          $(".p7 .music, .p7 .scroll, .p7 .portrait, .p7 .line, .p7 .p7_bg2, .p7 .SP7").css("-webkit-filter", "grayscale(0%)")
          $(".p7 .p7_1").css({"animation": "word 1s", "opacity": "1"})

          setTimeout(function () {
            $(".p7 .p7_2_bg").css({"animation": "word 1s", "opacity": "1"})
            typing("p7_2_speak", p7_str1, 0)
          }, 1000);
          setTimeout(function () {
            $(".p7 .p7_3_bg").css({"animation": "word 1s", "opacity": "1"})
          }, 3500);
          setTimeout(function () {
            typing("p7_3_speak", p7_str2, 0)
          }, 4000)
          setTimeout(function () {
            $(".p7 .p7_4_bg").css({"animation": "word 1s", "opacity": "1"})
          }, 7000);
          setTimeout(function () {
            typing("p7_4_speak", p7_str3, 0)
          }, 8000)
          break;
        case 7:
          $(".p8 .line, .p8 .p8_bg2, .p8 .SP8").addClass("grayscale_animation")
          $(".p8 .music").addClass("music_animation")
          $(".p8 .scroll").addClass("scroll_animation")
          $(".p8 .portrait").addClass("grayscale_animation")
          $(".p8 .music, .p8 .scroll, .p8 .portrait, .p8 .line, .p8 .p8_bg2, .p8 .SP8").css("-webkit-filter", "grayscale(0%)")
          $(".p8 .p8_1").css({"animation": "word 1s", "opacity": "1"})
          setInterval(function () {
            $(".p8 .p8_3").css({"animation": "word 1s", "opacity": "1"})
          }, 1000)
          break;
        case 8:
          movelineInP8();
          $(".p9 .p9_1").css({"animation": "word 1s", "opacity": "1"})
          setInterval(function () {
            $(".p9 .p9_3").css({"animation": "word 1s", "opacity": "1"})
          }, 1000)
          break;
        case 9:
          $(".p10 .p10_1").css({"animation": "word 1s", "opacity": "1"})
          break;
        case 10:
          $(".p11 .p11_1").css({"animation": "word 1s", "opacity": "1"})
          break;

      }
    }
  });

  $(".p3_5").click(function () {
    $(".p4").css("display", "block")
  });

  $(".p4_exit").click(function () {
    $(".p4").css("display", "none")
  })

  $(".p6_3").click(function () {
    $(".p6 .p6_2").css({"animation": "word 1s", "opacity": "1"})
  })

  $(".p8_3").click(function () {
    $(".p8 .p8_2").css({"animation": "word 1s", "opacity": "1"})
  })
  $(".p9_3").click(function () {
    $(".p9 .p9_2").css({"animation": "word 1s", "opacity": "1"})
  })

  var isPlaying = true;
  var player = $(".audio")[0]
    $(".music").click(function(){
        if (isPlaying) {
            $(".music").css("animation", "none");
            player.pause();
            isPlaying = false;
        }else{
            $(".music").css({"animation" : "music 5s", "animation-iteration-count" : "infinite", "animation-timing-function" : "linear"});
            player.play();
            isPlaying = true;
        }
    }) 

});

var p3_str1 = '请问您有什么财富目标？'
var p3_str2 = '我希望在我女儿18岁生日的时候能够为她提供留学资金。'
var p3_str3 = "了解，根据您的需求，请看pad上</br>我为您度身定做的资产配置规划。"

var p7_str1 = "顺利抵达美国，花旗账户</br>已经开好啦～"
var p7_str2 = "好的宝贝。我刚刚把生活费</br>打到你账上了。遇到什么问</br>题随时和我或你妈妈说。"
var p7_str3 = "转账收到！谢谢爸爸！"

function typing(divname, str, i) {
  var div = document.getElementById(divname);

  if (i <= str.length) {
    div.innerHTML = str.slice(0, i++) + '_';
    // setTimeout("typing()", 200);//閫掑綊璋冪敤
    setTimeout(function () {
      typing(divname, str, i)
    }, 100)
  }
  else {
    div.innerHTML = str;//缁撴潫鎵撳瓧,绉婚櫎 _ 鍏夋爣
  }
}

function movelineInP3() {
  $(".p3 .portrait").css({"animation": "portrait 1s", "left": "36vw"})
  $(".p3 .SP3").css({"animation": "squareSP3 1s", "left": "36%"})
}
function movelineInP4() {
  $(".p5 .portrait").addClass("portrait_animation_p5")
  $(".p5 .portrait").css("left", "58vw")
  $(".p5 .SP5").css({"animation": "squareSP4 1s ease", "left": "63%"})
}

function movelineInP8() {
  $(".p9 .portrait").css({"animation": "portrait_p9 1s", "left": "80vw"})

  $(".p9 .SP9").css({"animation": "squareSP4 1s ease", "left": "91%"})
}

