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


/**
 * Namespace declaration. Use the client's name and project. 
 */  
var IntSenseNamespace = window.IntSenseNamespace || {};

/*
 * Global logic
 * @namespace
 */
(function (pContext, $) {

    'use strict';

    /**
     * Module.
     *      This module manages the twitter ranking
     *
     * @private
     * @namespace
     **/
    var TwtRnkModule = (function() {

        /**
         * The twitter ranking data
         **/
        var rankingData = { };

        /**
         * The URL where ranking data is stored in the remote server
         */
        var RANKING_DATA_URL = 'http://api.ht.fuseamplify.com/api/artist/top';

        function registerButtomsEvents() {
            $('.btn').on('click', function() {
                var id = $(this).data('id');
                hideOrShow(id);
            });
        }

        function hideOrShow(id) {
            var $btn = $('#btn' + id);
            var $infodiv = $('#info' + id);
            var $imgdiv = $('#img' + id);
            var $artdiv = $('#container' + id);

            if ($btn.html() == 'Hide') {
                $btn.html('Show');
                $infodiv.hide();
                $infodiv.removeClass("col-sm-8");
                $imgdiv.removeClass("col-sm-4");
                $artdiv.addClass('hide-img');
                $artdiv.removeClass('show-img');
            }
            else {
                $btn.html('Hide');
                $infodiv.show();
                $infodiv.addClass("col-sm-8");
                $imgdiv.addClass("col-sm-4");
                $artdiv.addClass('show-img');
                $artdiv.removeClass('hide-img');
            }
        }

        /**
         *  This method gets the ranking data from remote server
         * 
         * @private
         **/
        function getRankingData() {
            var params = {};
            params['aggregate'] = true;
            return $.ajax ({
                url: RANKING_DATA_URL,
                async: false,
                type: "get",
                dataType: 'jsonp',
                data: params
            });
        }

        /**
         * This method describes de sort rule
         * 
         * @private
         */
        function sortCompare(a, b) {
            return (a.volume - b.volume) * -1;
        }

        /**
         * This method inserts the position number to each object in the ranking data
         * 
         * @Private
         */
        function insertPositions() {
            $.each(rankingData, function(index, value) {
                rankingData[index].position = index + 1;
            });
        }

        /**
         * This method renders the ranking
         * 
         * @private
         */
        function renderRanking() {
            var context = { artists: rankingData };
            var tpt = window["JST"]["templates/ranking.hbs"];
            var html = tpt(context);
            $("#ranking").html(html);
        }

        /**
         * Init the module.
         * @public
         */
        function init() {
            // Get the twitter ranking data
            getRankingData()
            .done(function(data) {
                rankingData = data;

                // Sorts data by "volume"
                rankingData.sort(sortCompare);

                // Inserts positions
                insertPositions();

                // Renders HTML
                renderRanking();

                // Registers buttons events
                registerButtomsEvents();
            })
            .fail(function() {
                alert('Error getting Twitter Ranking Data.');
            });
        }

        // Return the public methods of the module so that they are accessible outside this context. 
        return {
            init : init
        };
    })();


    /**
     * Initializes the module.
     * @private
     */
    function init() {
        //Called the methods required to initialize all the modules.
        TwtRnkModule.init();
    }

    //Init.
    $(init);

}(IntSenseNamespace, jQuery));
