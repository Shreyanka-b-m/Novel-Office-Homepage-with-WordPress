<?php
function custom_theme_assets() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_style('novel-google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap', false);
    wp_enqueue_style('nunito-sans', 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap', false);
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', [], null, true);
    wp_enqueue_script('scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', ['gsap'], null, true);
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/assets/js/main.js', ['scrolltrigger'], null, true);
}
add_action('wp_enqueue_scripts', 'custom_theme_assets');

function register_my_menu() {
    register_nav_menu('primary', __('Primary Menu'));
}
add_action('after_setup_theme', 'register_my_menu');
