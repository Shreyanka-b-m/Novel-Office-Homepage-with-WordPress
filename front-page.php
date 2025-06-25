
  <!-- <section class="trusted-companies">
        <div class="trusted-container">
            <div class="trusted-text">
                <h2>Trusted by<br>Leading Companies</h2>
            </div>
            <div class="trusted-description">
                <p>We are proud to be the trusted partner of businesses across industries. Join the many clients who
                    rely on
                    us for a productive and inspiring workspace.</p>
            </div>
        </div>

        <div class="logos-grid">
                  <img src="/assets/images/stellapps.jpg" alt="Stellapps">

            <img src="/assets/images/JoulesToWatts.jpg"
                alt="Joules to Watts">
            <img src="/assets/images/Flatworld.jpg"
                alt="Flatworld">
            <img src="/assets/images/Hitachi.jpg"
                alt="Hitachi">
            <img src="/assets/images/Indiamart.jpg"
                alt="IndiaMart">
            <img src="/assets/images/Nasscom.jpg"
                alt="Nasscom">
            <img src="/assets/images/Unacademy.jpg"
                alt="Unacademy">
            <img src="/assets/images/Olx.jpg"
                alt="OLX Autos">
            <img src="/assets/images/CarDekho.jpg"
                alt="CarDekho">
            <img src="/assets/images/Qatar.jpg"
                alt="Qatar Airways">
            <img src="/assets/images/Air-Asia.jpg"
                alt="AirAsia">
            <img src="/assets/images/Pepe-Jeans.jpg"
                alt="Pepe Jeans">
        </div>
    </section>

    <section class="inquiry-section">
        <div class="chat-bubbles">
            <div class="bubble bubble-1">Coworking spaces available in Novel Office?</div>
            <div class="bubble bubble-2">Best office space with 24X7 service?</div>
            <div class="bubble bubble-3">What is the best office space in Bangalore ?</div>
            <div class="bubble bubble-4">Where is the best coworking space in Bangalore?</div>
        </div>

        <div class="inquiry-heading">
            <h2>Want to know<br>where the Best<br>Office Spaces are?</h2>
        </div>
    </section>

    <section class="rental-offices">
  <div class="rental-container">
    <h2 class="rental-heading">Best Rental office Space in Bangalore</h2>
    <p class="rental-description">
      We provide value-for-money services with top-notch amenities, 24/7 IT support and security service along with options from fully furnished to co-working and managed offices on rent in various prime locations in Bangalore.
    </p>
    <div class="rental-buttons">
      <a href="#" class="btn-primary">Explore Locations</a>
      <a href="#" class="btn-secondary">Explore Gallery</a>
    </div>

    <div class="office-cards">
      <div class="office-card">
        <img src="/assets/images/Frame 7.jpg" alt="Novel Office Queens">
        <div class="office-label">
          <h3>NOVEL OFFICE QUEENS</h3>
          <p>Queens Road, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="/assets/images/Frame 1.jpg" alt="Novel Office Central">
        <div class="office-label">
          <h3>NOVEL OFFICE CENTRAL</h3>
          <p>MG Road, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="/assets/images/Novel Business Park.jpg" alt="Novel MSR Tech Park">
        <div class="office-label">
          <h3>NOVEL MSR TECH PARK</h3>
          <p>Marathahalli, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="/assets/images/Frame 3.jpg" alt="Novel Brigade Tech Park">
        <div class="office-label">
          <h3>NOVEL BRIGADE TECH PARK</h3>
          <p>Whitefield, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="/assets/images/Frame 5.jpg" alt="Novel Office Workhub">
        <div class="office-label">
          <h3>NOVEL OFFICE WORKHUB</h3>
          <p>Whitefield, Bangalore</p>
        </div>
      </div>
    </div>
  </div>
</section> -->

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

  <div id="overlay-container">
  <div class="overlay-card">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 7.jpg" alt="Novel Office Queens">
    
    <div class="card-content">
      <h4>NOVEL OFFICE QUEENS</h4>
      <p>Queens Road, Bangalore</p>
      <span class="view-link"><u> View</u> &rarr;</span>
    </div>
  </div>
  <div class="overlay-card">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 1.jpg" alt="Novel Office Central">
    <div class="card-content">
      <h4>NOVEL OFFICE CENTRAL</h4>
      <p>More description text.</p>
      <span class="view-link"> <u> View</u> &rarr;</span>
    </div>
  </div>
  <div class="overlay-card">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Novel Business Park.jpg" alt="Novel MSR Tech Park">
    <div class="card-content">
      <h4>NOVEL MSR TECH PARK</h4>
      <p>Marathahalli, Bangalore</p>
      <span class="view-link"><u> View</u> &rarr;</span>
    </div>
  </div>
  <div class="overlay-card">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 3.jpg" alt="Novel Brigade Tech Park">
    <div class="card-content">
      <h4>NOVEL BRIGADE TECH PARK</h4>
      <p>Whitefield, Bangalore</p>
      <span class="view-link"><u> View</u> &rarr;</span>
    </div>
  </div>
  <div class="overlay-card">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 5.jpg" alt="Novel Office Workhub">
    <div class="card-content">
      <h4>NOVEL OFFICE WORKHUB</h4>
      <p>Whitefield, Bangalore</p>
      <span class="view-link"><u> View</u> &rarr;</span>
    </div>
  </div>
</div>


  <div class="final-content" id="final-content">
    <h2>Best Rental office Space in Bangalore</h2>
    <p>We provide value-for-money services with top-notch amenities, 24/7 IT support and security service along with options from fully furnished to co-working and managed offices on rent in various prime locations in Bangalore.</p>
    <div class="button-group">
      <button class="btn-primary">Explore Locations</button>
      <button class="btn-secondary">Explore Gallery</button>
    </div>
  </div>


</div>

<?php get_footer(); ?>
