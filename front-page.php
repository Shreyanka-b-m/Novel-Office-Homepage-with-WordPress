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
