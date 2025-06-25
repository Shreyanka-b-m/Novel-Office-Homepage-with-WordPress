<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta charset="UTF-8">
  <title><?php wp_title('|', true, 'right'); ?></title>
  <meta name="description" content="Explore customizable office spaces with flexible terms from Novel Office. Ideal for startups, enterprises, and remote teams.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="navbar" id="navbar">
  <div class="logo">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Novel Logo White.png" alt="Novel Office Logo" class="logo-img" id="nav-logo" loading="lazy">
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
<script>
  const THEME_ASSETS_URI = '<?php echo get_template_directory_uri(); ?>/assets/images';
</script>
