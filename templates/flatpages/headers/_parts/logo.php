    <div class="logo">
        <a href="<?php echo esc_url(home_url()); ?>"><?php
            echo !empty($BREWERY_GLOBALS['logo'])
                ? '<img src="'.esc_url($BREWERY_GLOBALS['logo']).'" class="logo_main" alt="">'
                : '';
            echo !empty($BREWERY_GLOBALS['logo_fixed'])
                ? '<img src="'.esc_url($BREWERY_GLOBALS['logo_fixed']).'" class="logo_fixed" alt="">'
                : '';
            if (empty($BREWERY_GLOBALS['logo'])) {
                echo($BREWERY_GLOBALS['logo_text']
                    ? '<div class="logo_text">' . ($BREWERY_GLOBALS['logo_text']) . '</div>'
                    : '');
                echo($BREWERY_GLOBALS['logo_slogan']
                    ? '<br><div class="logo_slogan">' . esc_html($BREWERY_GLOBALS['logo_slogan']) . '</div>'
                    : '');
            }
        ?></a>
    </div>
