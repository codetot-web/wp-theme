<?php
/**
 * @package wp_theme
 * @author codetot
 * @since 0.0.1
 */

function wp_theme_frontend_assets() {
	$is_localhost = wp_theme_is_localhost();
	$build_prefix = $is_localhost ? '' : '.min';

	if ( !$is_localhost ) :
		wp_enqueue_style('wp-theme-frontend-css', WP_THEME_URI . '/assets/css/frontend.min.css', [], WP_THEME_VERSION);
	endif;

	wp_enqueue_script('wp-theme-frontend-js', WP_THEME_URI . '/assets/css/frontend' . $build_prefix . '.css', [], WP_THEME_VERSION);
}
add_action('wp_enqueue_scripts', 'wp_theme_frontend_assets');
