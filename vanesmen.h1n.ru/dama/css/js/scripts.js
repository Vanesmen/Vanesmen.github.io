$(function(){'use strict';$('.menu-toggle').click(function(){if($(this).hasClass('active')){$('.nav').removeClass('active');$(this).removeClass('active');}else{$('.nav').addClass('active');$(this).addClass('active');}});$('.countdown').final_countdown({'start':1362139200,'end':1388461320,'now':1387461319});$('.main-slider').each(function(){var $li=$('.slider-list__item',this);var $prev=$('.slider-buttons__button--prev',this);var $next=$('.slider-buttons__button--next',this);var $current=$('.slider-count__span',this);var $count=$('.slider-count__ins',this);var $paginations=$('.slider-paginations',this);$li.eq(0).addClass('slider-list__item--active');$current.text($li.filter('.slider-list__item--active').index()+1);$count.text($li.length);$li.each(function(){$paginations.append('<span class="slider-paginations__span"></span>');});var $pagination=$($paginations.find('.slider-paginations__span'));$pagination.eq($li.filter('.slider-list__item--active').index()).addClass('slider-paginations__span--active');$prev.click(function(){var index=$li.filter('.slider-list__item--active').index();if(index==0){index=$li.length;} $li.eq(index-1).addClass('slider-list__item--active').siblings().removeClass('slider-list__item--active');$pagination.eq(index-1).addClass('slider-paginations__span--active').siblings().removeClass('slider-paginations__span--active');$current.text(index);});$next.click(function(){var index=$li.filter('.slider-list__item--active').index();if(index==$li.length-1){index=-1;} $li.eq(index+1).addClass('slider-list__item--active').siblings().removeClass('slider-list__item--active');$pagination.eq(index+1).addClass('slider-paginations__span--active').siblings().removeClass('slider-paginations__span--active');$current.text(index+2);});$pagination.click(function(){$li.eq($(this).index()).addClass('slider-list__item--active').siblings().removeClass('slider-list__item--active');$(this).addClass('slider-paginations__span--active').siblings().removeClass('slider-paginations__span--active');$current.text($li.filter('.slider-list__item--active').index()+1);});});$('.popular-item__block').each(function(){var $prevImg=$('.popular-prev__span',this);var $mainImg=$('.popular-item__img',this);$prevImg.click(function(){$mainImg.eq($(this).index()).addClass('popular-item__img--active').siblings().removeClass('popular-item__img--active');$(this).addClass('popular-prev__span--active').siblings().removeClass('popular-prev__span--active');}).first().click();});$('.carousel-list__item').each(function(){var $prevImg=$('.carousel-list__preview-span',this);var $mainImg=$('.carousel-list__img',this);$prevImg.click(function(){$mainImg.eq($(this).index()).addClass('carousel-list__img--active').siblings().removeClass('carousel-list__img--active');$(this).addClass('carousel-list__preview-span--active').siblings().removeClass('carousel-list__preview-span--active');}).first().click();});$('.popular').each(function(){var $tabBlock=$('.tabs-blocks .list',this);var $tabBtn=$('.tabs__link',this);$tabBtn.click(function(){$tabBlock.eq($(this).index()).addClass('list--active').siblings().removeClass('list--active');$(this).addClass('tabs__link--active').siblings().removeClass('tabs__link--active');return false;}).first().click();});$('.carousel').each(function(){var $li=$('.carousel-list__item',this);var $prev=$('.carousel__btn--prev',this);var $next=$('.carousel__btn--next',this);$li.eq(0).addClass('carousel-list__item--active');$prev.click(function(){var index=$li.filter('.carousel-list__item--active').index();if(index==0){index=$li.length;} $li.eq(index-1).addClass('carousel-list__item--active').siblings().removeClass('carousel-list__item--active');});$next.click(function(){var index=$li.filter('.carousel-list__item--active').index();if(index==$li.length-1){index=-1;} $li.eq(index+1).addClass('carousel-list__item--active').siblings().removeClass('carousel-list__item--active');});});$('.header a').click(function(){var link=$(this).attr('href');var coordinats=$(link).offset().top;$('html, body').animate({scrollTop:coordinats},1000);console.log(coordinats);return false;});$('.open-popup').click(function(){$('.popup .popup__title').text($(this).data('title'));$('.popup .category').text($(this).data('category'));$('.popup .order-content__title').text($(this).data('desc'));$('.popup .order-content__span').text($(this).data('price'));$('.popup .order-img-block__img').attr('src',$(this).data('img'));$('.popup input[name="popup-title"]').val($(this).data('title'));$('.popup input[name="popup-price"]').val($(this).data('price'));$('.popup').fadeIn();$('.popup-background').fadeIn();$('.popup-background, .popup__close').click(function(){$('.popup').fadeOut();$('.popup-background').fadeOut();});return false;});});