/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["asset-manifest.json","31b83eef1b20c410fb18fc8b7a2bb71d"],["assets/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["assets/css/ie8.css","ee2797702f0ff8d47a1952fe6eb7601f"],["assets/css/ie9.css","36bc877b946fd1e46d4132db7a57395b"],["assets/css/images/overlay.png","b930a63a23f31c4dcca568a7ebbac447"],["assets/css/main.css","6203fe7f5eb204c3591613287d6ecc9a"],["assets/fonts/FontAwesome.otf","5dc41d8fe329a22fa1ee9225571c843e"],["assets/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["assets/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["assets/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["assets/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["assets/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["assets/images/logo.svg","4ca991d368fae6e03b8b82be031f3cea"],["assets/images/pic01.jpg","b9959e167f94349be29be7284e7b9112"],["assets/images/pic02.jpg","fd57fd018957fb01d0ba1ed0f80a2b70"],["assets/images/pic03.jpg","945f10e24d6f90d675e8291e2e2ca824"],["assets/images/pic04.jpg","1609dea61acb9e992d846c586683a226"],["assets/images/pic05.jpg","8eb8d7a3e364dc7210ca09841f703800"],["assets/images/pic06.jpg","51e864e8e56585bcd8427b14e9fc17ed"],["assets/js/ie/PIE.htc","3b8fed93f46e41f2a69bd65c289de89b"],["assets/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["assets/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["assets/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["assets/js/jquery.scrollex.min.js","f89065e3d988006af9791b44561d7c90"],["assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["assets/js/main.js","ebb063e445d58df87cdc1c212ecfd965"],["assets/js/skel.min.js","93140e29fa68bab55ce6eae874ae674d"],["assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["assets/sass/base/_page.scss","a5a368aa655563772a99820cce662a34"],["assets/sass/base/_typography.scss","3fad0576fa9456485bf786ade7cc5535"],["assets/sass/components/_box.scss","0c944016636cd68301802d4b53325a0e"],["assets/sass/components/_button.scss","7bb7b4de67bedc620b0804f7f30c67a5"],["assets/sass/components/_features.scss","17735a4842c8316732e7095ae08eeffa"],["assets/sass/components/_form.scss","71f82a09334a56d56fa7a068bf4e0990"],["assets/sass/components/_icon.scss","7bfb6a67b02d9b957bb4417300e5f007"],["assets/sass/components/_image.scss","7b73908b22bdc0900471ced1152cf196"],["assets/sass/components/_list.scss","6e04674d4299e4403952d8f5d7d15f67"],["assets/sass/components/_section.scss","591c423c2c3943e228418932bef9fd94"],["assets/sass/components/_spotlight.scss","66866af249465f6ef62072fd84e002ba"],["assets/sass/components/_statistics.scss","b497cef2dd11599ccc1a417d43edfb24"],["assets/sass/components/_table.scss","ab0bb93ffbc6e88add12d31ff74d9c02"],["assets/sass/ie8.scss","e8c28476339d6bf136267d3bb62fec01"],["assets/sass/ie9.scss","2fcfe789965308e509f77faab38c865b"],["assets/sass/layout/_footer.scss","87777cd8d9e47c78da2d514d5603a44c"],["assets/sass/layout/_header.scss","2159cafb6810f755a25ea6b6ee91c61d"],["assets/sass/layout/_main.scss","6dfd1c1071c0e5df3d0a2eb3ba3d3914"],["assets/sass/layout/_nav.scss","1581dcec7aa9d192799ea0eed047f56f"],["assets/sass/layout/_wrapper.scss","eedb2ad40e5730e59821c07016d5014c"],["assets/sass/libs/_functions.scss","bdf24f6877f7521f7e4f191faff7011c"],["assets/sass/libs/_mixins.scss","af3612ec6c86ebf2835d217f1731f6f4"],["assets/sass/libs/_skel.scss","a7847cc225401e689a4241748201cd33"],["assets/sass/libs/_vars.scss","36c19fa9b7ead3546acfa55b7383d2a5"],["assets/sass/main.scss","3f1a65253557eed209f4d1e409235664"],["favicon.ico","fd73a6eb26a08ee46e7fd3cc34e7f6bf"],["index.html","bea3a7ba34c1eac8212c4d985022b54c"],["manifest.json","a4ca799b0b2685cae7209d87b2822991"],["static/css/main.b3624681.css","8b338dd36904c247c8fefbdad3cbd1e9"],["static/js/main.6a51e80c.js","bed71f12e748f656b481debd5b6e5fdd"],["static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







