/* eslint-disable */
import { Selector } from 'testcafe'; // first import testcafe selectors

// A fixture must be created for each group of tests.
fixture(`Login page`)
// Load the URL your development server runs on.
  .page('http://localhost:8000/home');

// Create a new test(description, function(testController): <Promise>)
test('Unauthorized Home redirects to "Email" login', async testController => { // jshint ignore:line
  // Select the paragraph element under the body.
  // Must use promises (async / await  here) for communication with the browser.
  const paragraphSelector = await new Selector('.form-group'); // jshint ignore:line

  // Assert that the inner text of the paragraph is "Hello World!"
  await testController.expect(paragraphSelector.innerText)    // jshint ignore:line
    .eql('E-Mail Address');
});
