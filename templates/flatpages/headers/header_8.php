<?php

// Disable direct call
if ( ! defined( 'ABSPATH' ) ) { exit; }


/* Theme setup section
-------------------------------------------------------------------- */

if ( !function_exists( 'brewery_template_header_8_theme_setup' ) ) {
	add_action( 'brewery_action_before_init_theme', 'brewery_template_header_8_theme_setup', 1 );
	function brewery_template_header_8_theme_setup() {
		brewery_add_template(array(
			'layout' => 'header_8',
			'mode'   => 'header',
			'title'  => esc_html__('Header 8', 'brewery'),
			'icon'   => brewery_get_file_url('templates/headers/images/8.jpg')
			));
	}
}

// Template output
if ( !function_exists( 'brewery_template_header_8_output' ) ) {
	function brewery_template_header_8_output($post_options, $post_data) {
		global $BREWERY_GLOBALS;

		// WP custom header
		$header_css = '';
		if ($post_options['position'] != 'over') {
			$header_image = get_header_image();
			$header_css = $header_image!='' 
				? ' style="background: url('.esc_url($header_image).') repeat center top"' 
				: '';
		}
		?>

		<div class="top_panel_fixed_wrap"></div>

		<header class="top_panel_wrap top_panel_style_8 scheme_<?php echo esc_attr($post_options['scheme']); ?>">
			
			<div class="top_panel_wrap_inner top_panel_inner_style_8 top_panel_position_<?php echo esc_attr(brewery_get_custom_option('top_panel_position')); ?>">
			
				<?php if (brewery_get_custom_option('show_top_panel_top')=='yes') { ?>
				<div class="top_panel_top">
					<div class="content_wrap clearfix">
						<?php
						$top_panel_top_components = array('contact_info', 'login', 'currency', 'bookmarks', 'socials');
						require_once brewery_get_file_dir('templates/headers/_parts/top-panel-top.php');
						?>
					</div>
				</div>
				<?php } ?>

				<div class="top_panel_middle" <?php echo ($header_css); ?>>
					<div class="content_wrap">
                        <div class="contact_logo">
                            <?php require_once brewery_get_file_dir('templates/headers/_parts/logo.php'); ?>
                        </div>

						<div class="menu_pushy_wrap clearfix">
							<a href="#" class="menu_pushy_button icon-menu"><?php esc_html_e('MENU', 'brewery'); ?></a>
						</div>
					</div>
				</div>

			</div>

		</header>

		<nav class="menu_pushy_nav_area pushy pushy-left scheme_<?php echo esc_attr(brewery_get_custom_option('pushy_panel_scheme')); ?>">
			<div class="pushy_inner">
	
				<a href="#" class="close-pushy"></a>
	
				<?php

	
				if (empty($BREWERY_GLOBALS['menu_main'])) $BREWERY_GLOBALS['menu_main'] = brewery_get_nav_menu('menu_main');
				if (empty($BREWERY_GLOBALS['menu_main'])) $BREWERY_GLOBALS['menu_main'] = brewery_get_nav_menu();
				echo str_replace('menu_main', 'menu_pushy', $BREWERY_GLOBALS['menu_main']);
	
				$address_1 = brewery_get_theme_option('contact_address_1');
				$address_2 = brewery_get_theme_option('contact_address_2');
				$phone = brewery_get_theme_option('contact_phone');
				$fax = brewery_get_theme_option('contact_fax');
				if (!empty($address_1) || !empty($address_2) || !empty($phone) || !empty($fax)) {
					?>

					<?php
				}
	
				if (brewery_get_custom_option('show_socials')=='yes') {
					?>
					<div class="contact_socials">
						<?php brewery_show_layout(brewery_sc_socials(array('size'=>'small'))); ?>
					</div>
					<?php
				}
				?>

			</div>
        </nav>

        <!-- Site Overlay -->
        <div class="site-overlay"></div>
		<?php
	}
}
?>