# Novel Office Custom WordPress Theme

## Installation Steps

1. Download or clone the repository: https://github.com/Shreyanka-b-m/Novel-Office-Homepage-with-WordPress.git
2. Copy the folder into your WordPress `wp-content/themes/` directory.
3. Activate the theme from the WordPress Dashboard > Appearance > Themes.
4. Make sure Advanced Custom Fields (ACF) plugin is installed and active.
5. Create a page and assign the "Testimonials Page" template to it for viewing testimonials.

## Custom Post Types Used

- **Testimonial**:
- Registered using `register_post_type('testimonial', [...])` in `functions.php`.
- Fields like `designation` and `featured image` are handled via ACF.
- Displayed in `page-testimonials.php`.

## Performance Optimizations

- **Lazy Loading**: Implemented using `loading="lazy"` on all `<img>` tags.
- **Minimal JS**: GSAP animations are only initialized for specific pages to reduce load.
- **Conditional Assets**: Scripts and styles are enqueued conditionally where needed.

