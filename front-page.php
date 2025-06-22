<?php get_header(); ?>

<main>
  <section class="hero">Custom theme for Novel Office!</section>
  
</main>

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
