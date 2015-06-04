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
 
app.factory('artistsFactory', function($http) {
    var factory = {};
    factory.getArtists = function() {
        return $http.jsonp(ARTISTS_DATA_URL);
    };
    return factory;
});
