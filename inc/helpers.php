<?php
/**
 * @package wp_theme
 * @author codetot
 * @since 0.0.1
 */

function wp_theme_is_localhost() {
	return !empty($_SERVER['HTTP_X_CODETOT_WP_THEME_HEADER']) && $_SERVER['HTTP_X_CODETOT_WP_THEME_HEADER'] === 'development';
}
