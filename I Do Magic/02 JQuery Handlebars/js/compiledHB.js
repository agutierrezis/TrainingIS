this["JST"] = this["JST"] || {};

this["JST"]["templates/ranking.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div id=\"container"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"row artist-container\">\n	<div id=\"img"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"col-xs-12 col-sm-4\">\n		<img src=\""
    + alias3(((helper = (helper = helpers.profileImage || (depth0 != null ? depth0.profileImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profileImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\"></img>\n		<p class=\"custom-position\">"
    + alias3(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"position","hash":{},"data":data}) : helper)))
    + "</p>\n		<button type=\"button\" id=\"btn"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary custom-button\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Hide</button>\n	</div>\n	<div id=\"info"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"col-xs-12 col-sm-8\">\n		<div class=\"row\">\n			<div class=\"col-xs-4\">Tweets:</div>\n			<div class=\"col-xs-4\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.tweets : stack1), depth0))
    + "</div>\n			<div class=\"col-xs-4\"></div>\n		</div>\n		<div class=\"row central-row\">\n			<div class=\"col-xs-4\">Followers:</div>\n			<div class=\"col-xs-4\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.followers : stack1), depth0))
    + "</div>\n			<div class=\"col-xs-4\"></div>\n		</div>\n		<div class=\"row bottom-row\">\n			<div class=\"col-xs-4\">Retweets:</div>\n			<div class=\"col-xs-4\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.retweets : stack1), depth0))
    + "</div>\n			<div class=\"col-xs-4\"><a href=\"https://twitter.com/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.handle || (depth0 != null ? depth0.handle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"handle","hash":{},"data":data}) : helper)))
    + "</a></div>\n		</div>\n	</div>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});