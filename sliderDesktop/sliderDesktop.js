/* ID till arkivet vi hämtar puffarna ur, samt länk till att skapa ny bildspelspuff */
var ARCHIVE_ID = '3.38ea2928143a0c4faec10b5';
var URL_CREATE_NEW = '/restapi/v1/3.38ea2928143a0c4faec10b5/nodeutil/createarticle?template=91.38ea2928143a0c4faec10bb&editorType=BLOG_EDITOR';

/* Öppna upp Sitevisions APIer */
var utils = request.getAttribute('sitevision.utils');
var portletContextUtil = utils.getPortletContextUtil();
var scriptUtil = utils.getScriptUtil();
var propertyUtil = utils.getPropertyUtil();
var outputUtil = utils.getOutputUtil();
var jcrSession = request.getAttribute('sitevision.jcr.session');
var permissionUtil = utils.getPermissionUtil();

/* Puffbilden ska vara 950x377*/
var imageScaler = utils.getImageScaler(1170, 377);
var imageRenderer = utils.getImageRenderer();
imageRenderer.setImageScaler(imageScaler);

/* Hämta arkivet, och dess noder som är puffarna */
var archive = jcrSession.getNodeByIdentifier(ARCHIVE_ID);
var articles = archive.getNodes();

var archivesingle = jcrSession.getNodeByIdentifier('5.38ea2928143a0c4faec10f0');

/**
 *  Kontrollera att användaren har rättigheter att skapa nya artiklar.
 *  Detta kommer användas sedan om länk till att skapa ny bildspelspuff ska skrivas ut.
 */
var user = portletContextUtil.getCurrentUser();
var userIsAllowedToCreateArticle = permissionUtil.hasCreateArticlePermission(archive, user);

var html = outputUtil.getNodeInfoAsHTML(archivesingle, 200);

var allPropertiesIterator = archivesingle.getProperties();
while(allPropertiesIterator.hasNext())
{

   try
   {
      var property = allPropertiesIterator.nextProperty();
      var pName = property.getName();
      var pValue = outputUtil.getHtmlText(archivesingle, pName, "null");

   } catch (e)
   {

   }

}
