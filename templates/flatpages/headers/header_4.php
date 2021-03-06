<?php

// Disable direct call
if ( ! defined( 'ABSPATH' ) ) { exit; }


/* Theme setup section
-------------------------------------------------------------------- */

if ( !function_exists( 'brewery_template_header_4_theme_setup' ) ) {
	add_action( 'brewery_action_before_init_theme', 'brewery_template_header_4_theme_setup', 1 );
	function brewery_template_header_4_theme_setup() {
		brewery_add_template(array(
			'layout' => 'header_4',
			'mode'   => 'header',
			'title'  => esc_html__('Header 4', 'brewery'),
			'icon'   => brewery_get_file_url('templates/headers/images/4.jpg')
			));
	}
}

// Template output
if ( !function_exists( 'brewery_template_header_4_output' ) ) {
	function brewery_template_header_4_output($post_options, $post_data) {
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

		<header class="top_panel_wrap top_panel_style_4 scheme_<?php echo esc_attr($post_options['scheme']); ?>">
			<div class="top_panel_wrap_inner top_panel_inner_style_4 top_panel_position_<?php echo esc_attr(brewery_get_custom_option('top_panel_position')); ?>">
			
			<?php if (brewery_get_custom_option('show_top_panel_top')=='yes') { ?>
				<div class="top_panel_top">
					<div class="content_wrap clearfix">
						<?php
						$top_panel_top_components = array('contact_info', 'login', 'cart', 'currency', 'bookmarks');
						require_once brewery_get_file_dir('templates/headers/_parts/top-panel-top.php');
						?>
					</div>
				</div>
			<?php } ?>

			<div class="top_panel_middle" <?php echo ($header_css); ?>>
				<div class="content_wrap">
					<div class="columns_wrap columns_fluid"><div
						class="column-1_4 contact_logo">
                            <?php require_once brewery_get_file_dir('templates/headers/_parts/logo.php'); ?>
						</div><div 
						class="column-3_4 menu_main_wrap">
							<a href="#" class="menu_main_responsive_button icon-menu"></a>
							<nav class="menu_main_nav_area">
								<?php
								if (empty($BREWERY_GLOBALS['menu_main'])) $BREWERY_GLOBALS['menu_main'] = brewery_get_nav_menu('menu_main');
								if (empty($BREWERY_GLOBALS['menu_main'])) $BREWERY_GLOBALS['menu_main'] = brewery_get_nav_menu();
								echo ($BREWERY_GLOBALS['menu_main']);
								?>
							</nav>
							<?php if (brewery_get_custom_option('show_search')=='yes') brewery_show_layout(brewery_sc_search(array())); ?>
						</div>
					</div>
				</div>
			</div>

			</div>
		</header>

		<?php
	}
}
?>