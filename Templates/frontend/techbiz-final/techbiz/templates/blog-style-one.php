<?php
/**
 * @Packge     : Techbiz
 * @Version    : 1.0
 * @Author     : Vecurosoft
 * @Author URI : https://www.vecurosoft.com/
 *
 */

// Block direct access
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

echo '<!-- Single Post -->';
?>
<div <?php post_class(); ?> >
<?php

    // Blog Post Thumbnail
    do_action( 'techbiz_blog_post_thumb' );
    // Blog Post Content
    do_action( 'techbiz_blog_post_content' );
    
echo '</div>';
echo '<!-- End Single Post -->';