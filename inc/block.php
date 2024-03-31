<?php
class LGFRLoginForm
{
	public function __construct()
	{
		add_action('init', [$this, 'onInit']);
		add_action('wp_ajax_nopriv_lgfr_login', [$this, 'onSubmit']);
		add_action('wp_ajax_nopriv_lgfr_password_reset', [$this, 'reset_password_callback']);
	}
	function onInit()
	{
		wp_register_style('lgfr-hello-style', LGFR_DIR_URL . 'dist/style.css', [], LGFR_VERSION); // Style
		wp_register_style('lgfr-hello-editor-style', LGFR_DIR_URL . 'dist/editor.css', ['lgfr-hello-style'], LGFR_VERSION); // Backend Style

		register_block_type(__DIR__, [
			'editor_style' => 'lgfr-hello-editor-style',
			'render_callback' => [$this, 'render']
		]); // Register Block

		wp_set_script_translations('lgfr-hello-editor-script', 'b-blocks', LGFR_DIR_PATH . 'languages');
	}

	function render($attributes)
	{
		extract($attributes);

		wp_enqueue_style('lgfr-hello-style');
		wp_enqueue_script('lgfr-hello-script', LGFR_DIR_URL . 'dist/script.js', ['react', 'react-dom', 'wp-util'], LGFR_VERSION, true);
		wp_set_script_translations('lgfr-hello-script', 'b-blocks', LGFR_DIR_PATH . 'languages');

		$className = $className ?? '';
		$blockClassName = "wp-login-lgfr-form $className align$align";

	
		ob_start();

		if(is_user_logged_in()){ ?>
			<div><h3>You are already loggedin. <a class="lgfr-logoutBtn" href="<?php echo esc_url(wp_logout_url( $additional['logoutRedirect'] )) ?>">Logout</a></h3></div>
		<?php
		return ob_get_clean();
		}

		?>
		<div data-nonce="<?php echo esc_attr(wp_create_nonce('wp_ajax')) ?>" class='<?php echo esc_attr($blockClassName); ?>' id='lgfr-login-form-<?php echo esc_attr($cId) ?>'
			data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
	}

	function onSubmit(){
		$nonce = sanitize_text_field($_POST['nonce']);
		$username = sanitize_text_field($_POST['user_login']);
		$password = sanitize_text_field($_POST['user_password']);
		$remember = sanitize_text_field($_POST['remember']) === 'true';

		if(!wp_verify_nonce($nonce, 'wp_ajax')){
			wp_send_json_error([
				'message' => 'Invalid request',
			]);
		}

		$user = wp_signon([
			'user_login' => $username,
			'user_password' => $password,
			'remember' => $remember
		]);

		if ( is_wp_error( $user ) ) {
			wp_send_json_error([
				'message' => $user->get_error_message()
			]);
		}
		wp_send_json_success([
			'message' => 'Successfully logged in',
			'user' => $user
		]);
	}

function reset_password_callback(){
		global $wpdb, $current_site;

		$nonce = sanitize_text_field($_POST['nonce']);
		$user_email = sanitize_text_field($_POST['email']);
		$user =  get_user_by('email', $user_email);
		$user_login = isset($user->data->user_login) ? $user->data->user_login : false;

		
		

		if(!wp_verify_nonce($nonce, 'wp_ajax') || !$user){
			wp_send_json_error([
				'message' => 'Invalid request',
			]);
		}
		
		$key = get_password_reset_key($user);
		if(is_wp_error($key)){
			wp_send_json_error('error');
		}

		$message = __('Someone requested that the password be reset for the following account:') . "\r\n\r\n";
		$message .= network_home_url( '/' ) . "\r\n\r\n";
		$message .= sprintf(__('Username: %s'), $user_login) . "\r\n\r\n";
		$message .= __('If this was a mistake, just ignore this email and nothing will happen.') . "\r\n\r\n";
		$message .= __('To reset your password, visit the following address:') . "\r\n\r\n";
		$message .= network_site_url("wp-login.php?action=rp&key=$key&login=" . rawurlencode($user_login), 'login') . ">\r\n";

		if ( is_multisite() ){
				$blogname = $GLOBALS['current_site']->site_name;
			}else{
				// The blogname option is escaped with esc_html on the way into the database in sanitize_option
				// we want to reverse this for the plain text arena of emails.
				$blogname = wp_specialchars_decode(get_option('blogname'), ENT_QUOTES);
			}

		$title = sprintf( __('[%s] Password Reset'), $blogname );

		$title = apply_filters('retrieve_password_title', $title);
		$message = apply_filters('retrieve_password_message', $message, $key);

		if ( $message && !wp_mail($user_email, $title, $message) ){
				wp_send_json_error([
					'message' => _('The e-mail could not be sent.') . "<br />\n" . _('Possible reason: your host may have disabled the mail() function...')
				]);
		}
		
		wp_send_json_success([
			'message' => 'Successfully send mail!',
		]);
	}
}
new LGFRLoginForm();
