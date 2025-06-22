<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div class="header-hero-wrapper">
  <header class="site-header">
    <div class="navbar-container">
      <div class="logo">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Novel Logo.png" alt="Novel Office Logo">
      </div>

      <div class="mobile-nav-wrapper">
        <nav class="main-nav">
          <?php
            wp_nav_menu([
              'theme_location' => 'primary',
              'menu_class' => 'nav-menu',
            ]);
          ?>
        </nav>
      </div>

      <div class="mobile-menu-toggle" onclick="document.body.classList.toggle('nav-open')">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>

  <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">
                    <div>OFFICES</div>
                    <div class="with">WITH</div>
                    <div>NOVEL</div>
                </h1>
                <div class="vertical-line"></div>
                <div class="scroll">Scroll to know more</div>
            </div>
  </section>
  
</div>