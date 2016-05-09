var ARCHIVE_ID = '3.613efd691501f24d79718369';

var utils = request.getAttribute('sitevision.utils');
var linkRenderer = utils.getLinkRenderer();
var scriptUtil = utils.getScriptUtil();
var jcrSession = request.getAttribute('sitevision.jcr.session');
var propertyUtil = utils.getPropertyUtil();
var ctxUtil = utils.getPortletContextUtil();

var archive = jcrSession.getNodeByIdentifier(ARCHIVE_ID).getNodes();

// Get article of current page
var currentPage = ctxUtil.getCurrentPage();

if(currentPage.hasProperty('jcr:uuid')) {

   // Get current article id
   var currentArchiveId = currentPage.getProperty('jcr:uuid').string;

   // Initiate a iterate counter
   var index = 0;

   // Iterate over archive
   while(archive.hasNext()) {

      var last;

      if(archive.hasNext()) {

         index++;

         var current = archive.next();

         // Check if we are on current article by comparing Id:s
         if(current.getProperty('jcr:uuid').string === currentArchiveId) {

            // Get next article if has next
            if(archive.hasNext()) {
               var nextArticle = archive.next();
            } else {
               var nextArticle = null;
            }
            // Get previous article if index is more than 1
            if(index > 1) {
               var previousArticle = last;
            } else {
               var previousArticle = null;
            }

         } else {
            // Else store current to last and move on
            last = current;
         }

      }

   }

}
