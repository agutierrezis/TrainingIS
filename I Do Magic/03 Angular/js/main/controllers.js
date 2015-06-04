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
 
app.controller('artistsController', function($scope, artistsFactory) {
    
    /**
     * This method describes de sort rule
     * 
     * @private
     */
    function sortCompare(a, b) {
        if (a < b) {
          return -1;
        }
        else if (a > b) {
          return 1;
        }
        return 0;
    }

    function init() {
        artistsFactory.getArtists()
        .success(function(data) {
            $scope.artists = data;

            var links = [];
            $.each(data, function(index, value) {
              var initial = value.name.charAt(0);
              $scope.artists[index].initial = initial;
              if (links.indexOf(initial) < 0) {
                links.push(initial);
              }
            });
            links.sort(sortCompare);
            $scope.initials = links;
        })
        .error(function(data, status, headers, config, statusText) {
            console.log(status);
            console.log(config);
            console.log(statusText);
        });
    }

    $scope.setFilter = function(newFilter) {
      $scope.initialFilter = { initial: newFilter };
    }

    init();
});
