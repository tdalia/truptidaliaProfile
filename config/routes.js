/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  //'/resources': { view: 'pages/resources' },
  "_/resources": { view: 'pages/resources' },
  get "/resources"() {
    return this["_/resources"];
  },
  set "/resources"(value) {
    this["_/resources"] = value;
  },
  "_/weatherKit": { view: 'pages/projects/weatherKit' },
  get "/weatherKit"() {
    return this["_/weatherKit"];
  },
  set "/weatherKit"(value) {
    this["_/weatherKit"] = value;
  },
  "_/projects": { view: 'pages/projectspage' },
  get "/projects"() {
    return this["_/projects"];
  },
  set "/projects"(value) {
    this["_/projects"] = value;
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
