This is a quick test to see how UserFrosting's Fortress interacts with input arrays such as `<input name="SomeArray[]"...`

I believe I added or edited 5 files:
* `app/schema/InputArray.yml` has the core documentation, and Fortress rules for the test.
* `app/templates/pages/index.html.twig` is the input page, with some insightful values for the above rules.
* `app/src/Controller/AppController.php` feeds the input through Fortress, and feeds the results of each processing step out via Twig.
* `app/templates/pages/display.html.twig` is a quick-and-dirty (aka *not* robust) Twig template that attempts to show the results of the test processing.
* `app/src/MyRoutes.php` added a route for the form's submit button.

UF's files retain their original licensing (obviously) while my changes and additions are licensed under [The Unlicense](https://unlicense.org/).

Leave an issue here if this test doesn't run for you, and I'll check if my upload missed important files.

This is not meant as a full UserFrosting install; please see [UserFrosting](https://github.com/userfrosting/UserFrosting/) for that.
