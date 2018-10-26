//Original Duraamen GA Tracking Code

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-65651587-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-65651587-1');
</script>


// I did find a way to do it, however, using the 'Additional Scripts' section (Settings -> Checkout -> Order Processing -> Additional Scripts). This section lets you add any JS you want to run on the Thank You page. Due to cross-origin stuffs with sensitive data on the actual checkout page, you cannot put custom code there. BUT. Our saving grace is that the Shopify object is accessable from the thank you page, and it still has all of the cart data.

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    // your GA code replaces 'UA-XXXXXXXX-X'
    ga('create', 'UA-65651587-1', 'auto', {'allowLinker': true});
    ga('require', 'linker');
    // your domain replaces 'domain.com'
    ga('linker:autoLink', ['duraamen.com'] );
    ga('send', 'pageview');

    ga('require', 'ecommerce');

    var checkoutObj = window.Shopify.checkout,
        lineItems = checkoutObj.line_items

    if (checkoutObj)
        // I'm using the checkout object to pull order-wide data.
        // (you can find other available params in the Shopify JS API)
        ga('ecommerce:addTransaction', {
          'id': checkoutObj.order_id,
          'affiliation': '',
          'revenue': checkoutObj.subtotal_price,
          'shipping': checkoutObj.shipping_rate.price,
          'tax': checkoutObj.total_tax
        })

    if (lineItems)
      for (var i = 0; i < lineItems.length; i++){
          var line_item = lineItems[i]
          // and I'm using the lineItem objects to get individual item data
          // (you can find other available params in the Shopify JS API)
          ga('ecommerce:addItem', {
              'id': line_item.product_id,
              'name': line_item.title,
              'sku': line_item.sku,
              'category': '',
              'price': line_item.price,
              'quantity': line_item.quantity
          });
      }

    // ayy, send the data we we're trying to get!
    ga('ecommerce:send');
</script>
