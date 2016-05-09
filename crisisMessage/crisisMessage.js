var ARCHIVE_ID = '3.613efd691501f24d797ac04';
var NUMBER_OF_ARTICLES = 1;

var utils = request.getAttribute('sitevision.utils');
var linkRenderer = utils.getLinkRenderer();
var scriptUtil = utils.getScriptUtil();
var jcrSession = request.getAttribute('sitevision.jcr.session');

var archive = jcrSession.getNodeByIdentifier(ARCHIVE_ID);
var articles = archive.getNodes();
