jQuery(function(){
  //var hotelLink = $('#mainSlideshow .slide a:first').attr('href');
  //$('.bird-link').attr('href',hotelLink);
  //jQuery('#mainSlideshow .slide a img').attr('width','100%').removeAttr('height')

  jQuery('.view-homeslide').carouFredSel({
    responsive: true,
    prev: "#block-homeslide .prev",
    next: "#block-homeslide .next",
    items: {
      visible: 1,
      height: '45%'
    },
    scroll: {
      fx: 'crossfade',
      duration: 1500,
      onBefore:function(data){
        //var hotelLink = $(data.items.visible[0].innerHTML).attr('href');
        //$('.bird-link').attr('href',hotelLink);
      },
      pauseOnHover:true
    },
    pagination  : "#block-homeslide .pagination .bullets"
  });

  //$('.next,.prev','.carousel-wrapper').on('click',function(){
  //  $('#mainSlideshow').trigger('configuration',{'auto':false});
  //});

  jQuery('.view-slideitem').carouFredSel({
    //width:600,
    responsive: true,
    circular:false,
    infinite: false,
    auto: false,
    prev: '#block-slideitem .prev',
    next: '#block-slideitem .next',
    pagination  : "#block-slideitem .pagination .bullets",
    items: 3,
    scroll: {
      items:3
    },
    swipe: {
      touch: true,
      mouse: false,
      fx:'slide',
      duration:200
    }
  });

  /* === CMS - changing translation on hover === */
  var itemHover = false;
  jQuery('.column').on({
    mouseenter: function(){
      //var link = $('.link',this);
      if (!itemHover){
        jQuery("[data-translation]", this).each(function(){
          itemHover = true;
          switchTranslation(jQuery(this));
        });
      }
    },
    mouseleave: function(){
      //var link = $('.link',this);
      jQuery('[data-translation]', this).each(function(){
        switchTranslation(jQuery(this));
      });
      itemHover = false;
    }
  });


  jQuery('.discount-date').each(function(){
    jQuery(this).html(jQuery(this).data('deadline'));
  });

  function switchTranslation(el){
      var temp = el.html();
      el.html(el.data('translation'));
      el.data('translation',temp);
  }

//jQuery end
});
