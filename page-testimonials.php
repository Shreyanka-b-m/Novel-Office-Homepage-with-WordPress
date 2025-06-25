<?php
/**
 * Template Name: Testimonials Page
 */
get_header();
?>

<section class="testimonials-page">
  <h2 class="section-title">TESTIMONIALS</h2>
  <p class="section-subtitle">What our clients say about us</p>

  <div class="testimonials-wrapper">
    <?php
      $args = array(
        'post_type' => 'testimonial',
        'posts_per_page' => -1
      );
      $testimonial_query = new WP_Query($args);

      if ($testimonial_query->have_posts()) :
        while ($testimonial_query->have_posts()) : $testimonial_query->the_post();
          $designation = get_field('designation'); // ACF field
    ?>
      <div class="testimonial-box">
        <div class="testimonial-img">
          <?php the_post_thumbnail('thumbnail'); ?>
        </div>
        <div class="testimonial-content">
          <p><span class="quote">❝</span><?php the_content(); ?><span class="quote">❞</span></p>
          <h3><?php the_title(); ?> <span><?php echo $designation; ?></span></h3>
        </div>
      </div>
    <?php endwhile; wp_reset_postdata(); endif; ?>
  </div>
</section>

<?php get_footer(); ?>
