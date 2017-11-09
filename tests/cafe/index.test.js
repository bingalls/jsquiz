/* eslint-disable */
import { Selector } from 'testcafe'; // first import testcafe selectors

// A fixture must be created for each group of tests.
fixture(`Index page`)
// Load the URL your development server runs on.
  .page('http://localhost:8000');

// Create a new test(description, function(testController): <Promise>)
test('Body > Div contains "Login"', async testController => { // jshint ignore:line
  // Select the paragraph element under the body.
  // Must use promises (async / await  here) for communication with the browser.
  const paragraphSelector = await new Selector('body > div'); // jshint ignore:line

  // Assert that the inner text of the paragraph is "Hello World!"
  await testController.expect(paragraphSelector.innerText)    // jshint ignore:line
    .eql('LOGIN REGISTER\nLaravel\nDOCUMENTATION LARACASTS NEWS FORGE GITHUB\n');
});
