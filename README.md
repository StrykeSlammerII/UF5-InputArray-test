This is a quick test to see how UserFrosting's Fortress interacts with input arrays such as `<input name="SomeArray[]"...`

I believe I added or edited 5 files:
* `app/schema/InputArray.yml` has the core documentation, and Fortress rules for the test.
* `app/templates/pages/index.html.twig` is the input page, with some insightful values for the above rules.
* `app/src/Controller/AppController.php` feeds the input through Fortress, and feeds the results of each processing step out via Twig.
* `app/templates/pages/display.html.twig` is a quick-and-dirty (aka *not* robust) Twig template that attempts to show the results of the test processing.
* `app/src/MyRoutes.php` added a route for the form's submit button.

## My results
The Fortress features work correctly, but not quite intuitively for me.

There's no need for a UF issue. I have submitted a documentation PR to clarify how Fortress YAML interacts wth input arrays.

## Disclaimer
I did not test multidimensional input arrays.

My current use case only has single-dimensional arrays, and UF recommends AJAX over HTML forms in the later "Client-side code" documentation chapter.

## Install
This repo does not include `/vendor` or `/node_modules` folders. You will need to install [UserFrosting](https://github.com/userfrosting/UserFrosting/) first, but should be able to drop this into a fresh UF installation.
(It may be easier to copy the 5 files listed above into a fresh installation.)

After that, if this test doesn't run for you, leave an issue here and I'll check if my upload missed important files.

# Licensing
UF's files retain their original licensing (obviously) while my changes and additions are licensed under [The Unlicense](https://unlicense.org/).
