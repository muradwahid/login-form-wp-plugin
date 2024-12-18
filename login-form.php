<?php
/**
 * Plugin Name: Login Form Block
 * Description: Login form easily customize your login page..
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: login-form-block
 */

// ABS PATH
if (!defined('ABSPATH')) {
  exit;
}

// Constant
define('LGFR_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('LGFR_DIR_URL', plugin_dir_url(__FILE__));
define('LGFR_DIR_PATH', plugin_dir_path(__FILE__));



require_once LGFR_DIR_PATH . 'inc/block.php';