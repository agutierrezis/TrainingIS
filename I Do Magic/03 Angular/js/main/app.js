/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: main.js
 */

 /*
  * Author:      agutierrez@intelligentsense.com
  * Date:        02/06/2015
  * Description: Template to create javascript namespaces and modules
  */

var ARTISTS_DATA_URL = "http://api.ht.fuseamplify.com/api/artist/top?aggregate=true&callback=JSON_CALLBACK";

var app = angular.module('twitterArtistsApp', []);
