# Vue.js Quiz
Simple quiz on Vue.js with login page

## Notice
Version 1 worked in 2017, but has been impacted by disruption and limited
maintenance of Laravel Mix.
I'll revisit project maintenance, should Laravel adopt Parcel for stability.

## Requirements
* MySQL 5.6 or MariaDB 10 (tested on MariaDB)
* PHP 7 (tested on 7.2)
* Yarn 1.3 (NPM install of Yarn currently NOT recommended)

## Installation
Git clone this project, and cd into the created directory
* cp .env.example .env
  * Edit .env
* create database with settings in .env
* composer install
* php artisan migrate
* php artisan db:seed
* optional: php artisan vendor:publish
  * optional: artisan ide-helper:*
* yarn
* yarn run development
* php artisan make:auth
* php artisan key:generate
* mkdir -p storage/app
* mkdir -p storage/framework/cache
* mkdir storage/framework/sessions
* mkdir storage/framework/views
* chmod -R 777 framework
* php artisan serve
* open browser - http://localhost:8000/ (from previous step)

## Tests
You'll need zsh for **/* recursive wildcards, else use an alternate syntax.

### JavaScript Tests
JavaScript style is inspired by AirBnB standard
* yarn check
* yarn audit
* jscs resources/**/*.js
* eslint resources/**/*.js
* jshint resources/**/*.js
* gjslint resources/**/*.js

### PHP Tests
* composer validate
* phpcs --config-set default_standard PSR2
* phpcs app config
* https://github.com/antonioribeiro/laravelcs takes a bit more effort to install

### Other Tests
* https://html5.validator.nu/ Actually caught issues in Laravel's standard blade layout
* yarn run testcafe

No custom SCSS; no testing needed.

Currently, the PHP & JavaScript code is using libraries with their own tests,
or declarative code. That said, I've made the code as testable, as feasible,
such as components.
Thus, neither PHPUnit tests nor vue-test-utils have much to cover.
Note that vue-test-utils are still not yet at production 1.0.
Also, the engine for PhantomJS & CasperJS is being replaced with a major overhaul.

Selenium tests are outside the current scope.
For demonstration purposes, I added 2 testcafe tests, but not past the point of
dealing with passwords.
