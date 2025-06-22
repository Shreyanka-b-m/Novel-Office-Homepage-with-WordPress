<?php
function mytheme_enqueue_assets() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_assets');

function create_testimonial_post_type() {
  register_post_type('testimonial',
    array(
      'labels' => array(
        'name' => __('Testimonials'),
        'singular_name' => __('Testimonial')
      ),
      'public' => true,
      'has_archive' => true,
      'supports' => array('title', 'editor', 'thumbnail'),
      'rewrite' => array('slug' => 'testimonials'),
    )
  );
}
add_action('init', 'create_testimonial_post_type');
