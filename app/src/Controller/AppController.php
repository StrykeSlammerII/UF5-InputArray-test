<?php

// app/src/Controller/AppController.php

/*
 * UserFrosting (http://www.userfrosting.com)
 *
 * @link      https://github.com/userfrosting/UserFrosting
 * @copyright Copyright (c) 2013-2024 Alexander Weissman & Louis Charette
 * @license   https://github.com/userfrosting/UserFrosting/blob/master/LICENSE.md (MIT License)
 */

namespace UserFrosting\App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

use UserFrosting\Fortress\Adapter\JqueryValidationArrayAdapter;
use UserFrosting\Fortress\RequestSchema;
use UserFrosting\I18n\Translator;
use UserFrosting\Fortress\Transformer\RequestDataTransformer;
use UserFrosting\Fortress\Validator\ServerSideValidator;
use UserFrosting\Sprinkle\Core\Exceptions\ValidationException;

/**
 * AppController Class.
 *
 * Implements some common site wide routes.
 *
 * N.B.: This file is safe to edit or delete. If you delete this class, don't
 *       forget to delete the corresponding routes and entry in the Sprinkle Recipe!
 */
class AppController
{
    /**
     * Renders the default home page for UserFrosting.
     * By default, this is the page that non-authenticated users will first see when they navigate to your website's root.
     * Request type: GET.
     *
     * @param Response $response
     * @param Twig     $view
     */
    public function pageIndex(Response $response, Twig $view): Response
    {
        return $view->render($response, 'pages/index.html.twig');
    }
    
    /**
     * Parse the input form for this test.
     * Request type: POST.
     *
     * @param Response $response
     * @param Twig     $view
     */
    public function parseForm(Response $response, Request $request, Twig $view, Translator $translator): Response
    {
        // rather than using a DebugLogger, we're going to send different datasets through to Twig, and display via HTML.
        
        // According to docs (https://learn.userfrosting.com/routes-and-controllers/client-input/validation)...
        // server-side validation and transform should look something like this:
        /*
         * $params = $request->getParsedBody();
         * $schema = new RequestSchema('schema://requests/contact.yaml');
         * $transformer = new RequestDataTransformer();
         * $data = $transformer->transform($schema, $params);
         * 
         * $validator = new ServerSideValidator($this->translator);
         * $errors = $validator->validate($schema, $data);
         * if (count($errors) !== 0) {
         *   $e = new ValidationException();
         *   $e->addErrors($errors);
         *   throw $e;
         * }
         */
          
         $params = $request->getParsedBody();
         $p1 = $params;
         $schema = new RequestSchema('schema://InputArray.yml');
         $transformer = new RequestDataTransformer();
         $data = $transformer->transform($schema, $params);
         $p2 = $data;
          
         $validator = new ServerSideValidator($translator);
         $errors = $validator->validate($schema, $data);
         $e = array(); // moved this outside the loop so we can pass it to Twig
         foreach ($errors as $this_error)
         {
           $e[]=$this_error;
           //throw $e; // we don't want to throw this, we'll pass it in to Twig and display any errors there.
         }
        
          
        return $view->render($response, 'pages/display.html.twig', [ 'params'=>$p1, 'data'=>$p2, 'errors'=>$e ]);
    }

    /**
     * Renders a sample "about" page for UserFrosting.
     * Request type: GET.
     *
     * @param Response $response
     * @param Twig     $view
     */
    public function pageAbout(Response $response, Twig $view): Response
    {
        return $view->render($response, 'pages/about.html.twig');
    }

    /**
     * Renders terms of service page.
     * Request type: GET.
     *
     * @param Response $response
     * @param Twig     $view
     */
    public function pageLegal(Response $response, Twig $view): Response
    {
        return $view->render($response, 'pages/legal.html.twig');
    }

    /**
     * Renders privacy page.
     * Request type: GET.
     *
     * @param Response $response
     * @param Twig     $view
     */
    public function pagePrivacy(Response $response, Twig $view): Response
    {
        return $view->render($response, 'pages/privacy.html.twig');
    }
}
