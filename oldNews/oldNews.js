var utils = request.getAttribute('sitevision.utils');
var linkRenderer = utils.getLinkRenderer();
var scriptUtil = utils.getScriptUtil();
var jcrSession = request.getAttribute('sitevision.jcr.session');
var propertyUtil = utils.getPropertyUtil();
var ctxUtil = utils.getPortletContextUtil();

var currentPage = ctxUtil.getCurrentPage();

if(currentPage.hasProperty('lastPublishDate')) {
   var lastPublishDate = currentPage.getProperty('lastPublishDate').string;
   lastPublishDate = lastPublishDate.substring(0, lastPublishDate.indexOf('T'));
   var message = "Obs! Denna nyhet är från " + lastPublishDate + " och kan vara inaktuell.";
} else {
   var message = "Obs! Denna nyhet är gammal och kan vara inaktuell.";
}
