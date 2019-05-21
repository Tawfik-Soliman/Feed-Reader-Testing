/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

         // Checking allFeeds array is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         // Itereate on each element of allFeeds array and check it has url defined and not empty
         it('feed url defined and not empty',function() {
            allFeeds.forEach( feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         // Itereate on each element of allFeeds array and check it has name defined and not empty
         it('feed name defined and not empty', function() {
            allFeeds.forEach( feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
         })

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu' , function() {

    


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         // const body = document.querySelector('body');
         // const menuClicked = document.querySelector('.menu-icon-link');

         // check that menu is hidden by default by Checking class menu-hidden
         it('menu is hidden by default', function() {
            // expect(body.classList.contains('menu-hidden')).toBe(true);
            expect($('body').hasClass('menu-hidden')).toBe(true);
         })


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          // checking the toggle function of the menu when menu icon clicked
          it('menu toggled when clicked', function() {
            // menuClicked.click();
            // expect(body.classList.contains('menu-hidden')).toBe(false);

            // menuClicked.click();
            // expect(body.classList.contains('menu-hidden')).toBe(true);

            $('.menu-icon-link').click(); /*simulate click on menu*/
            expect($('body').hasClass('menu-hidden')).toBe(false); //when clicked menu come vissible \
                                                                   //after removing menu-hidden class

             $('.menu-icon-link').click(); /*simulate click on menu*/
            expect($('body').hasClass('menu-hidden')).toBe(true); //when clicked menu come hidden 
                                                                  //after adding menu-hidden class


          })



    });





    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

   
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // const feed = document.querySelector('.feed');

        //load the feed before test begin
        beforeEach( done => { 
            loadFeed(0, function() {
                done(); //wait until the feed is loaded
            })
        }) 

        it('ensure single .entry element within .feed container', function() {
            let entry = $('.feed .entry');
            // let entry = document.querySelector('.feed');
            expect(entry.length).toBeGreaterThan(0); // check the existance of entry inside a feed
        })
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {    

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         //load first and second feed before test begin
        beforeEach( done => {
            loadFeed(0, function() {
                firstFeed = $('.feed').html(); //load first feed
                loadFeed(1, function () {
                    secondFeed = $('.feed').html(); // load second feed
                    done(); // wait until both second and forst feed loaded
                })
            })
        })  

        it('ensure when new feed is loaded the content chaneges', function() {
            expect(firstFeed).not.toBe(secondFeed); // test second feed is changed
        })


    });


}());
