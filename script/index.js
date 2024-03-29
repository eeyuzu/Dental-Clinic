$(document).ready(function(){

  $('header').load('include/Header.html',function(){
      $('html').click(function(e){
        console.log(e.target)

        if(!$(e.target).hasClass('choice')){
          $('.language').hide();
        }
        if(!$(e.target).hasClass('title')){
          $('.title_list').slideUp();
        }
        
      });
    
    $('.lang').click(function(e){
      $('.language').toggle();
      return false
      
  });


  $('.language li').click(function(){
    let langChoice = $(this).text()

      $('.choice').text(langChoice);
  });


  /*로고이미지 src값으로 한글에서 영어로 글자변경*/
  /*로고 크림치과에서 CREAM으로 변경*/ 
  $('header h1').mouseover(function(){
    $('header h1 img').attr('src','images/logo.en_03.png')
  });
  /*로고 CREAM에서 크림치과로 변경*/
  $('header h1').mouseout(function(){
      $('header h1 img').attr('src','images/logo_03.png')
    });



/*mouseenter-본인한테 마우스 올렸을떄*//*mouseover-본인포함 하위메뉴까지 포함*/
    /*mouseenter,mouseleave 가 한짝이고 *//*mouseover, mouseout이 한짝이다*/


    /*gnb누르면 한꺼번에 메뉴들이 나옴(치아교정누르면 하위메뉴 다 나옴)*/
    $('.gnb').mouseover(function(){
      $('.lnb').stop().fadeIn(200)
    })
    $('.gnb').mouseout(function(){
      $('.lnb').stop().fadeOut(200)
    })

// 지시2
    /*gnb하나씩 나오게 하기(치아교정누르면 치아교정 밑 하위메뉴만)*/
    // $('.gnb li').mouseover(function(){
    //   $(this).find('.lnb').stop().fadeIn(200)
    // })
    // $('.gnb li').mouseout(function(){
    //   $('.lnb').stop().fadeOut(200)
    // })



      console.log($('header nav').offset().top)

    $(window).scroll(function(){
      let scrT = $(window).scrollTop();
      console.log(scrT)

      //$('#visual').css({backgroundSize:100+scrT/10+'%'});
      $('#visual .model').css({top:100-scrT/5+'px'});

      if(scrT >= 135){
          $('header nav').addClass('on')
      } else {
          $('header nav').removeClass('on')
      }
    });




    //---------------------------------------------
//현재 페이지 표시 스크립트//

//도메인주소 구하는 방법//

let url = window.location.href;

$('.gnb a').each(function(){
  let gnbText = $(this).text();
  $(this).html('<span>'+gnbText+'</span>')
})


$('.gnb a').each(function(){
  let gnbHref = $(this).attr('href') //sub01_01.html

  if(url.indexOf(gnbHref) > -1){
    $(this).css({color:'#a892e6'});
    $(this).parent('li').addClass('on');


    let gnbHtml = $(this).parents('.lnb').html();
    let h2Text = $(this).text();
    let gnbPage = $(this).parents('.lnb').siblings('a').text();
    let gnbEng = $(this).parents('.lnb').siblings('a').attr('data-eng');

    //찾은 a의 할아버지 lnb에 들어있는 글자//
    $('#visual_sub .text strong').text(gnbPage)
    $('#visual_sub .text p').text(gnbEng)


    $('.snb').html(gnbHtml);
    $('#content_box h2').text(h2Text)
  }
});







//-----------------------------------------------------------
function snbAction(){
  let snbOnW = $('.snb li.on span').width()
  let snbOnL = $('.snb li.on span').position().left
  $('.snb_box .line').css({left:snbOnL, width:snbOnW})
  
}

snbAction();

$(window).resize(function(){
  snbAction();
})

/* snb */
$('.snb li').mouseenter(function(){
    let snbLiW = $(this).find('span').width();
    let snbLiL = $(this).find('span').position().left

    $('.snb_box .line').css({left:snbLiL, width:snbLiW})
})

$('.snb').mouseleave(function(){
  snbAction();
});

  })








      /*notice 롤링*/
      // let kkk = setInterval(함수, 반복시간)
      // clearIntetval(kkk)

      // let mmm = setTimeout(함수,예약시간)
      // clearTimeout(mmm)


      let notiRoll = setInterval(noticeRolling, 2000)

      function noticeRolling(){
      
      $('.notice ul').animate({top:'-100%'}, function(){
        $('.notice ul li').eq(0).appendTo($('.notice ul'))
        $('.notice ul').css({top:0})
      })
      }

      $('.notice').mouseenter(function(){
        clearInterval(notiRoll)
      })

      $('.notice').mouseleave(function(){
        notiRoll = setInterval(noticeRolling, 2000)
      })




/*메인section5 번호넣는 방법1-for문 사용*/
    // for(let i=0; i<9; i++){
    //   $('#section5 li').eq(i).find('span.num').text('0'+(i+1))
    // };
//     li들중 몇번 째(eq)에 들어있는 자손 .num을 찾아서 글씨를 써라.
// 는 명령문이다

/*메인section5 번호넣는 방법2-each사용*/
//  $('#section5 li').each(function(){
//     let liIndex = $(this).index()
//     $(this).find('.num').text('0'+(liIndex+1))
//  });

/*메인section5 번호넣는 방법3-each사용(도형이10개이상이면 10부터는 0대신 숫자 1씩만 커져라)
(10보다 낮은 도형은 0이라는 문자가 붙은채로 1씩 커져라*/
// $('#section5 li').each(function(index, item){
  
//   if(index+1 < 10){
//     $(item).append('<span class="num"></span>')
//     $(item).find('.num').text('0'+(index+1))
//   } else{
//     $(item).find('.num').text(index+1)
//   }
  
  
  
  
// });


/*윤리강경을 클릭하면 그 숫자만큼 경고창으로 뜬다. 4를 클릭하면 4가 뜬다*/
// $('#section5 li').click(function(){
//   alert($(this).index())
// })

//----------------------------------------------------------------------
/*snb 초기모드*/

// let snbPosi = $('.snb .on span').position().left;
// let snbPosiW = $('.snb .on span').width();

// $('.line').css({left:snbPosi, width:snbPosiW})


/*snb 새로고침할때 위치*/

// function snbAction(){
// let snbPosii = $('h1').offset().top; 
// let snbPosiT = $('h1').offset().left;
// let snbPosiU = $('h1').width();
// let snbPosiH = $('h1').height();
// $('.line').css({top:snbPosii+snbPosiH, left:snbPosiT, width:snbPosiU});
// }

// snbAction()

// $(window).resize(function(){

//   snbAction()
// })




/*snb*/
// $('.snb li').mouseenter(function(){
//   //밑줄은 콘솔 찍으면 숫자만 나오고 픽셀이 안나온다
//   let snbLiW = $(this).find('span').width();
//   //밑줄은 픽셀단위까지 나온다
//   // let snbLiW = $(this).find('span').css('width')
//   //밑줄의 left는 왼쪽 값을 구하는 left이고 css안의 left는 명령어가 아니고 왼쪽으로부터의 거리값이다. 
//   let snbLiL = $(this).find('span').position().left;
//   console.log(snbLiL)

//   $('.snb_box .line').width(snbLiW);
//   $('.snb_box .line').css({left:snbLiL , width:snbLiW});
// });






/*로그인페이지 현재페이지 표시*/

let url = window.location.href

$('.member a').each(function(){
  let memHref = $(this).attr('href');

  if(url.indexOf(memHref) > -1){
    $(this).css({color:'#A3A0ED'}).parent('li').addClass('on')
    let memH2 = $(this).text()
    $('#content_box h2').text(memH2)
  } else if(url.indexOf('join') > -1){
    $('.member a').eq(2).css({color:'#A3A0ED'}).parent('li').addClass('on')
    let memH2 = $('.member a').eq(2).text()
    $('#content_box h2').text(memH2)
  }
})


/*로그인 패스워드 눈아이콘*/


//버전1//
// $('.eye_on').click(function(){
//     $(this).hide()
//     $('.eye_off').show()
//     $('.login_box input[name=pw]').attr('type', 'text')
// });
// $('.eye_off').click(function(){
//   $(this).hide()
//   $('.eye_on').show()
//   $('.login_box input[name=pw]').attr('type', 'password')
// });


//버전2//
$('.eye_box').click(function(){
  let $eyeInput =  $(this).prev('input')
  $eyeInput.toggleClass('active');

  if($eyeInput.hasClass('active')){
    $('.eye_off').show()
    $('.eye_on').hide()
    $('.login_box input[name=pw]').attr('type', 'text')
  } else {
    $('.eye_off').hide()
    $('.eye_on').show()
    $('.login_box input[name=pw]').attr('type', 'password')
  }
});



/*회원가입페이지 구분*/
if(url.indexOf('join_people') > -1){
  $('.join_people').show()
}
if(url.indexOf('join_company') > -1){
  $('.join_company').show()
}



/*회원가입 버튼*/
$('.join_ok').click(function(){
  let joinAgree = $('#rule_agree').is(':checked')
  let ruleAgreeTop = $('.rule_box').offset().top;

  if(!joinAgree){
    //1.경고창 띄우기
    // alert('이용약관에 동의해 주셔야 합니다.');

    //2.체크안하고 확인 눌르면 체크안된 이용약관으로 향하기
    $('html').animate({scrollTop:ruleAgreeTop});
    $('.rule_box label').css({border:'2px dotted crimson'})
    return false
  }
})


/*게시판*/
$('.board_page .title').click(function(){
  $('.title_list').slideToggle(200)
  $('.selectbox').toggleClass('on')


$(document).ready(function(){
  $('.option').click(function(){
    // 클릭된 option의 텍스트를 가져와서 title에 적용
    var selectedText = $(this).text();
    $('.title').text(selectedText);
  });
});

});


const urlSearch = new URLSearchParams(location.search);
    if(urlSearch.get('board_num') == '01'){
      $('.board_page h2').text('자유게시판')
    };

  $('#file_select').change(function(){
    //버전1
    // var fileName = $(this).val().split('\\').pop();
    // $('.filezone').text(fileName || '파일을 선택해주세요');


    //버전2
    let fileName = $(this).val()
    let fileZZo = fileName.split('\\'); // c, fakepath, style.css 0번째,1번째,2번째 순이다.
    let fileZZoLength = fileZZo.length
    console.log(fileZZoLength)

    $('.filezone').text(fileZZo[fileZZoLength - 1])
  });



});






