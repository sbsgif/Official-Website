
    const Suhail_gallery = document.getElementById('dynamic-gallery-Suhail');
    const dynamic_gallery_Suhail = lightGallery(Suhail_gallery, {

        //container: lgContainer,
        dynamic: true,
        // Turn off hash plugin in case if you are using it
        // as we don't want to change the url on slide change
        hash: false,
        // Do not allow users to close the gallery
        closable: true,
        // Add maximize icon to enlarge the gallery
        showMaximizeIcon: false,
        // Append caption inside the slide item
        // to apply some animation for the captions (Optional)
        appendSubHtmlTo: '.lg-item',
        // Delay slide transition to complete captions animations
        // before navigating to different slides (Optional)
        // You can find caption animation demo on the captions demo page
        slideDelay: 400,
        videojs: true,
        videojsOptions: {
          autoplay:false,
            preload: true,
            loop:true,
            controls:false,
            playbackRate: 3 ,

        },
        youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          controls: 0
        },
        vimeoPlayerParams: {
          byline : 0,
          portrait : 0,
          color : 'A90707'     
        },
        attributes: { preload: true, controls: true },
        plugins: [lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo],
        /**
        dynamicEl: [
            {
                src: 'assets/img/portfolio/Suhail/Gallery/01.jpg',
                thumb: 'assets/img/portfolio/Suhail/Gallery/01.jpg',
                subHtml: `<div class="lightGallery-captions">
                    <h4>Caption 1</h4>
                    <p>Description of the slide 1</p>
                    </div>`,
            },
            {
              src: 'assets/img/portfolio/Suhail/Gallery/02.jpg',
              thumb: 'assets/img/portfolio/Suhail/Gallery/02.jpg',
              subHtml: `<div class="lightGallery-captions">
                  <h4>Caption 1</h4>
                  <p>Description of the slide 1</p>
                  </div>`,
            },
            {
            src: 'assets/img/portfolio/Suhail/Gallery/03.jpg',
            thumb: 'assets/img/portfolio/Suhail/Gallery/03.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
                </div>`,
            },
            {
            src: 'assets/img/portfolio/Suhail/Gallery/04.jpg',
            thumb: 'assets/img/portfolio/Suhail/Gallery/04.jpg',
            subHtml: `<div class="lightGallery-captions">
              <h4>Caption 1</h4>
              <p>Description of the slide 1</p>
              </div>`,
            },
            {
              src: 'assets/img/portfolio/Suhail/Gallery/05.jpg',
              thumb: 'assets/img/portfolio/Suhail/Gallery/05.jpg',
              subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
                </div>`,
            },
            {
                src: 'assets/img/portfolio/Suhail/Gallery/06.jpg',
                thumb: 'assets/img/portfolio/Suhail/Gallery/06.jpg',
                subHtml: `<div class="lightGallery-captions">
                  <h4>Caption 1</h4>
                  <p>Description of the slide 1</p>
                  </div>`,
            },
            {
              src: 'assets/img/portfolio/Suhail/Gallery/06.jpg',
              thumb: 'assets/img/portfolio/Suhail/Gallery/06.jpg',
              subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
                </div>`,
            },
             
            
        ],
       */
      });
    
      
    /**
    // Since we are using dynamic mode, we need to programmatically open lightGallery
    //dynamic_gallery_Suhail.openGallery();

    //Suhail_gallery.addEventListener('click', function () {
      // Starts with third item.(Optional).
      // This is useful if you want use dynamic mode with
      // custom thumbnails (thumbnails outside gallery),
      //dynamic_gallery_Suhail.openGallery();
    }); */
  
  function Gallery(name){

      const newItems = [
        {
          video: {"source": [{"src":"assets/img/portfolio/"+name+"/"+name+".mp4", "type":"video/mp4"}]},
          type: 'video/mp4',
          thumb: "assets/img/portfolio/"+name+"/Gallery/01.jpg",
          subHtml: '',
        },
          {
            src: 'assets/img/portfolio/'+name+'/Gallery/02.jpg',
            thumb: 'assets/img/portfolio/'+name+'/Gallery/02.jpg',
            subHtml: '', 
          },
          {
            src: "assets/img/portfolio/"+name+"/Gallery/03.jpg",
            thumb: 'assets/img/portfolio/'+name+'/Gallery/03.jpg',
            subHtml: '',
        },
        {
          src: 'assets/img/portfolio/'+name+'/Gallery/04.jpg',
          thumb: 'assets/img/portfolio/'+name+'/Gallery/04.jpg',
          subHtml: '', 
        },

        {
          src: "assets/img/portfolio/"+name+"/Gallery/05.jpg",
          thumb: 'assets/img/portfolio/'+name+'/Gallery/05.jpg',
          subHtml: '',
      },
      {
        src: 'assets/img/portfolio/'+name+'/Gallery/06.jpg',
        thumb: 'assets/img/portfolio/'+name+'/Gallery/06.jpg',
        subHtml: '', 
      },
      {
        src: 'assets/img/portfolio/'+name+'/Gallery/07.jpg',
        thumb: 'assets/img/portfolio/'+name+'/Gallery/07.jpg',
        subHtml: '', 
      },


      ];

      console.log(newItems);
      //const updatedDynamicElements = [...dynamicEl, ...newItems];
      dynamic_gallery_Suhail.refresh(newItems);

      // To open gallery after updating slides,
      dynamic_gallery_Suhail.openGallery();

  }

  function YouTube_Gallery(){

      const newItems = [
        {
          src: 'https://www.youtube.com/embed/U4Zx_Wo3meo&mute=0',
          thumb: '',
          subHtml: '', 
        },
          {
              src: "https://www.youtube.com/embed/isvh9ol1ARY&mute=0",
              thumb: '',
              subHtml: '',
          },
          
          {
            src: "https://www.youtube.com/embed/H5mjzVyGNeM&mute=0",
            thumb: '',
            subHtml: '',
        },
        {
          src: 'https://www.youtube.com/embed/3_7C3aiHZNQ&mute=0',
          thumb: '',
          subHtml: '', 
        },

        {
          src: "https://www.youtube.com/embed/cC5gDSZv7To&mute=0",
          thumb: '',
          subHtml: '',
      },
      {
        src: 'https://www.youtube.com/embed/m_vGQ_0tPRE&mute=0',
        thumb: '',
        subHtml: '', 
      },
      {
        src: 'https://www.youtube.com/embed/Tz90SCk3e-A&mute=0',
        thumb: '',
        subHtml: '', 
      },
      {
        src: 'https://www.youtube.com/embed/kAxiAqa6l4o&mute=0',
        thumb: '',
        subHtml: '', 
      },
      {
        src: 'https://www.youtube.com/embed/8hD5_gxYPjQ&mute=0',
        thumb: '',
        subHtml: '', 
      },


      ];

      console.log(newItems);
      //const updatedDynamicElements = [...dynamicEl, ...newItems];
      dynamic_gallery_Suhail.refresh(newItems);

      // To open gallery after updating slides,
      dynamic_gallery_Suhail.openGallery();

  }



/*
//play video on div hover
  if(document.readyState){
    for (var i = 0; i < 11; i++) {
      const Id_Vid="vid_"+i;
      const Id_Div="#item_"+i;

      console.log(Id_Vid);
      console.log(Id_Vid);
      
      document.querySelector( Id_Div).addEventListener("mouseover", function () {document.getElementById(Id_Vid).play();  });

      console.log(document.getElementById(Id_Vid));
      console.log(document.querySelector( Id_Div));
      
      document.querySelector( Id_Div).addEventListener("mouseout" , function () {document.getElementById(Id_Vid).pause(); document.getElementById(Id_Vid).currentTime = 0;});
    };
  };
*/













(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()