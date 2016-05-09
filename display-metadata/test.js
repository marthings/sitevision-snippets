/* Hämta arkiv */
var ARCHIVE_ID = '3.4bd8ad61154515206966';

/* Öppna upp Sitevisions APIer */
var utils = request.getAttribute('sitevision.utils');
var portletContextUtil = utils.getPortletContextUtil();
var scriptUtil = utils.getScriptUtil();
var propertyUtil = utils.getPropertyUtil();
var outputUtil = utils.getOutputUtil();
var jcrSession = request.getAttribute('sitevision.jcr.session');

/* Skala bild */
var imageScaler = utils.getImageScaler(1170, 377);
var imageRenderer = utils.getImageRenderer();
imageRenderer.setImageScaler(imageScaler);

/* Hämta arkivet, och dess noder */
var archive = jcrSession.getNodeByIdentifier(ARCHIVE_ID);
var articles = archive.getNodes();
