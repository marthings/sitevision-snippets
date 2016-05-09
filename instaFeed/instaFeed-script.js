<script type="text/javascript">
    var feed = new Instafeed({
        target: 'instagram-feed',
        get: 'tagged',
        limit: 9,
        tagName: 'mittvaggeryd',
        clientId: 'dfb284ccbdb1476282dba3cea3dde354',
        template: '<div class="insta-image gallery-image"><a href="{{link}}"><img src="{{image}}" /></a></div>'
    });
    feed.run();
</script>

<div class="gallery">
   <h3 class="rubrikx3">Instagram #mittvaggeryd</h3>
   <div id="instagram-feed">

   </div>
</div>
