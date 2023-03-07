import $ from "jquery";
$(function(){
  let windowW = $(window).width()
  // console.log(windowW)
  if(windowW >= 980){
    nav();
    aside();
    modal();
  }
  if(windowW >=580 && windowW < 979){
    tNav();
    aside();
    gallery();
    modal();
    $('#modal p.close').css({right:2+'%',top:2+'%'})
  }
  if(windowW <579){
    mNav();
    gallery();
    modal();
    $('#modal p.close').css({top:1+'%',right:1+'%'})
  }

  //reset
  $(window).on('resize',function(e){
    window.location.reload();
  })  
})

//공통

function aside(){
  $('aside li>a').on('click',function(e){
   let href = $(this).attr('href');
   let wHeight = $(href).offset().top;
   const Header = $('header').innerHeight();
   if(href === '#box01'){
     $('body,html').animate({scrollTop: wHeight - Header});
   }else{
     $('body,html').animate({scrollTop: wHeight});
   }
  })
 }

function modal(){
  $('.all figure>img').on('click',function(e){
    $('#modal').css('display','block');
    const src = $(this).attr('src');
    const alt = $(this).attr('alt');
    $('#modal h4').html(alt);
    $('#modal figure img').attr('src',src).attr('alt',alt);
  })
  $('#modal p.close').on('click',function(e){ 
    $('#modal').css('display','none');
  })
}      


//web용

function nav(){
  $('nav li>a').on('click',function(e){
    let href = $(this).attr('href');
    let wHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: wHeight},500)
    return false;
  })
}



//태블릿용

function tNav(){
$('p.submenu').on('click',function(e){
  $('nav').animate({left : '0'});
})

$('nav p.close').on('click',function(e){
  const wNav = $('nav').width();
  $('nav').css('left','-'+ wNav +'px')
})

$('nav li>a').on('click',function(e){
  let href = $(this).attr('href');
  let bodyTop = $(href).offset().top;
  const Header = $('header').innerHeight();
  const wNav = $('nav').width();
  if(href === '#box01'){
    $('html,body').animate({scrollTop: bodyTop - Header})
  }else{
    $('html,body').animate({scrollTop:bodyTop})
  } 
  $('nav').css('left','-'+wNav+'px')
  return false;
})
}

//갤러리
function gallery(){
  const wFigure = $('.all>figure').width();
  $('.all figure:last').prependTo('.all');

  $('.all').css('margin-left','-'+wFigure+'px');

  $('.gallery .prev').on('click',function(e){
    $('.all').animate({marginLeft:'-='+wFigure+'px'},500,function(){
      $('.all figure:first').appendTo('.all');
      $('.all').css('margin-left','-'+wFigure+'px')
    })
  })

  $('.gallery .next').on('click',function(e){
    $('.all').animate({marginLeft:'+='+wFigure+'px'},500,function(){
      $('.all figure:last').prependTo('.all');
      $('.all').css('margin-left','-'+wFigure+'px')
    })
  })

}

//모바일용

function mNav(){
  $('p.submenu').on('click',function(e){
    $('nav:not(:animated)').slideToggle(500);
  })
  $('nav li>a').on('click',function(e){
    let href = $(this).attr('href');
    let bodyTop = $(href).offset().top;
    const Header = $('header').innerHeight();
    const wNav = $('nav').width();
    if(href === '#box01'){
      $('html,body').animate({scrollTop: bodyTop - Header})
    }else{
      $('html,body').animate({scrollTop:bodyTop})
    } 
    $('nav').css('display','none')
    return false;
  })
}





