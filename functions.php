<?php
function mytheme_enqueue_assets() {
    wp_enqueue_style('novel-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', false);
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

// Enable theme support for menus
add_theme_support('menus');

function novel_register_menus() {
    register_nav_menus([
        'primary' => __('Primary Menu', 'novel'),
    ]);
}
add_action('init', 'novel_register_menus');
