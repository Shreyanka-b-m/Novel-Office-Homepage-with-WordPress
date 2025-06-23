<?php get_header(); ?>
  <!-- Trusted Companies -->
  <section class="trusted-companies">
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

        <!-- Logos Grid -->
        <div class="logos-grid">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/stellapps.jpg" alt="Stellapps">

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
        </div>
    </section>

    <section class="inquiry-section">
        <!-- Chat Bubbles -->
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
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 7.jpg" alt="Novel Office Queens">
        <div class="office-label">
          <h3>NOVEL OFFICE QUEENS</h3>
          <p>Queens Road, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 1.jpg" alt="Novel Office Central">
        <div class="office-label">
          <h3>NOVEL OFFICE CENTRAL</h3>
          <p>MG Road, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Novel Business Park.jpg" alt="Novel MSR Tech Park">
        <div class="office-label">
          <h3>NOVEL MSR TECH PARK</h3>
          <p>Marathahalli, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 3.jpg" alt="Novel Brigade Tech Park">
        <div class="office-label">
          <h3>NOVEL BRIGADE TECH PARK</h3>
          <p>Whitefield, Bangalore</p>
        </div>
      </div>
      <div class="office-card">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Frame 5.jpg" alt="Novel Office Workhub">
        <div class="office-label">
          <h3>NOVEL OFFICE WORKHUB</h3>
          <p>Whitefield, Bangalore</p>
        </div>
      </div>
    </div>
  </div>
</section>



<?php get_footer(); ?>

<section class="testimonials">
  <h2>Testimonials (Example for custom post)</h2>
  <?php
  $args = array('post_type' => 'testimonial', 'posts_per_page' => 3);
  $loop = new WP_Query($args);
  while ($loop->have_posts()) : $loop->the_post(); ?>
    <div class="testimonial">
      <h3><?php the_title(); ?></h3>
      <div><?php the_content(); ?></div>
    </div>
  <?php endwhile; wp_reset_postdata(); ?>
</section>
