// noinspection JSUnresolvedFunction
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// noinspection JSUnresolvedFunction
window.Vue = require('vue');

// noinspection JSUnresolvedFunction
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chart', require('./components/Chart.vue'));

/**
 * List of questions with 2-way data-bound checkboxes.
 * It was faster & easier to code this at page scope, with access to Chart for results.
 * All checkboxes are initialized as unchecked, as a preference.
 * If you can cheat & find the answers here, this quiz is likely too simple for you!
 * Some answers may change after 2017, when this quiz was written!
 */
app = new Vue({
  el: '#vue-app',
  data: {
    currentView: '',
    questions: [
      {
        id: 1,
        ans: false,
        checked: false,
        text: 'Vue modifies the DOM using an ID or class, like jQuery',
      },
      {
        id: 2,
        ans: true,
        checked: false,
        text: 'Vue has 2-way data binding, like Angular',
      },
      {
        id: 3,
        ans: true,
        checked: false,
        text: 'Vue has templates, like React JSX',
      },
      {
        id: 4,
        ans: true,
        checked: false,
        text: 'Like Angular, Vue has full Typescript support',
      },
      {
        id: 5,
        ans: false,
        checked: false,
        text: 'Like React, Vue supports Fiber',
      },
      {
        id: 6,
        ans: false,
        checked: false,
        text: 'Vuex replaces Redux, as Redux is incompatible on Vue',
      }
    ],
    /**
     * Running tally of correct answers
     * @returns {int}   0 - questions.length
     * @todo Write a unit test. I decided to wait for stable vue-test-utils
     */
    countCorrect() {
      return _.reduce(this.questions, function(sum, item) {
        // noinspection JSUnusedAssignment
        return sum += (item.checked === item.ans) ? 1 : 0;
      }, 0);
    }
  }
});
