<?php
/**
 * @package wp_theme
 * @author codetot
 * @since 0.0.1
 */

define( 'WP_THEME_DIR', get_stylesheet_directory() );
define( 'WP_THEME_URI', get_stylesheet_directory_uri() );
define( 'WP_THEME_VERSION', wp_get_theme()->Get('Version') );

require_once WP_THEME_DIR . '/inc/theme-init.php';
