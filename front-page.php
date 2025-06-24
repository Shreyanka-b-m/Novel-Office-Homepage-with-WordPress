
<?php get_header(); ?>



   <header class="navbar" id="navbar">
  <div class="logo">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Novel Logo White.png" alt="Novel Office Logo" class="logo-img" id="nav-logo">
  </div>

  <div class="menu-toggle" id="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <nav class="main-nav">
    <?php
      wp_nav_menu([
        'theme_location' => 'primary',
        'container' => false,
        'menu_class' => 'nav-menu',
      ]);
    ?>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <?php
      wp_nav_menu([
        'theme_location' => 'primary',
        'container' => false,
        'menu_class' => 'mobile-nav-menu',
      ]);
    ?>
  </div>
</header>
<div id="section-container">
  <!-- SECTION 1: HERO IMAGE -->
  <div class="section active" id="section-1">
    
    <div class="hero-image-wrapper" id="hero-wrapper">
      <div class="hero-image" id="hero-image">
        <div class="hero-overlay" id="hero-overlay"></div>
        <h1 class="hero-title">
                    <div>OFFICES</div>
                    <div class="with">WITH</div>
                    <div>NOVEL</div>
                </h1>
        <div class="vertical-line"></div>
        <p class="scroll">Scroll to know more</p>
      </div>
      <div class="card-container" id="cards">
        <div class="card card-1">
          <div class="feat">HASSLE - FREE & FASTEST!</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        <div class="card card-2">
          <div class="feat">CUSTOMIZABLE LAYOUTS</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="card card-3">
          <div class="feat">FULLY FURNISHED</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="card card-4">
          <div class="feat">MANAGED 24*7</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 2: TRUSTED COMPANIES -->
  <div class="section" id="section-2">
    <div class="trusted-section-content">
      <div class="trusted-left">
        <h2>Trusted by<br>Leading Companies</h2>
      </div>
      <div class="trusted-right">
        <p>We are proud to be the trusted partner of businesses across industries. Join the many clients who rely on us for a productive and inspiring workspace.</p>
      </div>
      <div class="trusted-logos">
        <!-- Add logo images in assets/images and reference them properly -->
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/JoulesToWatts.jpg"
                alt="Joules to Watts">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Flatworld.jpg"
                alt="Flatworld">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hitachi.jpg"
                alt="Hitachi">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Indiamart.jpg"
                alt="IndiaMart">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Nasscom.jpg"
                alt="Nasscom">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Unacademy.jpg"
                alt="Unacademy">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Olx.jpg"
                alt="OLX Autos">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/CarDekho.jpg"
                alt="CarDekho">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Qatar.jpg"
                alt="Qatar Airways">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Air-Asia.jpg"
                alt="AirAsia">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Pepe-Jeans.jpg"
                alt="Pepe Jeans">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/stellapps.jpg" alt="Stellapps">
        
      </div>
    </div>
  </div>

  <!-- SECTION 3: INQUIRY SECTION -->
  <section id="section-3" class="section" style="opacity: 0;">
    <div class="chat-bubble bubble1">Coworking spaces available in Novel Office?</div>
    <div class="chat-bubble bubble2">Best office space with 24X7 service?</div>
    <div class="chat-bubble bubble3">What is the best office space in Bangalore?</div>
    <div class="chat-bubble bubble4">Where is the best coworking space in Bangalore?</div>
    <h1 class="headline">Want to know <br> where the Best <br> Office Spaces are?</h1>
  </section>

</div>

<?php get_footer(); ?>
