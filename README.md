# Articles Evaluator

Articles Evaluator is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

![Screenshot](preview.png) 

## Demo

> Run the Express Server & the Development Server

https://user-images.githubusercontent.com/69651552/134088581-b46ca171-84a5-486f-bf77-967df0554c4b.mp4

> Try the App on localhost:8080

https://user-images.githubusercontent.com/69651552/134088575-66fb9eda-adb1-4f51-b69c-4a4bb6cbfbc4.mp4

## Instructions, Building & Getting Started  
    - 1- Fork, clone or download this repository to your local machine.
    - 2- Be sure that you install the [Node.js](https://nodejs.org/en/) environment in your machine.
    - 3- Open your terminal and Be sure that you are inside the correct destination of the App, while you must be in the same path of the package.json file and the website folder.
    - 4- Create an account in the [Meaning Cloud Platform](https://www.meaningcloud.com/), once you create your account you can get your own API key from the platform dashboard and with this API key you can make the requests.   
    - 5- Create a (.env) file and add two environment variables into it as shown below:
          ```
            MEAN_CLOUD_API_URL=https://api.meaningcloud.com/sentiment-2.1
            MEAN_CLOUD_API_KEY=your_private_api_key_will_be_here
          ```
    - 6- You will need to protect your API key and all your environment 
         variables, so from the code side, the API key is already sent from the server side not from the client side while making the requests, but there is a problem if you push your code into any source control system like Github, as your environment variables will be public to anyone, so you MUST go to your .gitignore file and add ```.env``` , this will make sure that you don't push your environment variables to Github! If you forget this step, all of the work you did to protect your API key was pointless.
    - 7- Inside your terminal run these commands according to your need:-
    
        * to install dependencies.
        ```
        npm install
        ```
        * to start the Express Node.js server @ port 8081
        ```
        npm run start
        ```
        * to start the development server with webpack-dev-server @ port 8080
        ```
        npm run build-dev
        ```
        * to build the app and get the final production minimized version after finishing the development phase
        ```
        npm run build-prod
        ```
        * to run the unit testing with jest into the app
        ```
        npm run test
        ```
    - 8- To run the App correctly in the development mode, you have to run these commands in this order:- (npm install) then (npm run build-dev) and then (npm run start), after that the App will be opened directly into port 8080 and you can now deal with it, and happy coding!! 

## Frontend Languages 

* HTML
* CSS
* Vanilla JS version ES2015/ES6

## Server Runtime Environment

* [Node.js](https://nodejs.org/en/)

## Build Tools

* [Webpack](https://webpack.js.org/)

## Preprocessors

* [SASS](https://sass-lang.com/)

## Compilers

* [Babel](https://babeljs.io/)

## Plugins && Loaders

* [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
* [Dotenv](https://www.npmjs.com/package/dotenv-webpack)
* [Clean Webpack Plugin](https://www.npmjs.com/package/clean-webpack-plugin)
* [Optimize Css Assets Webpack Plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [Terser Webpack Plugin](https://www.npmjs.com/package/terser-webpack-plugin)
* [Mini Css Extract Plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
* [Workbox Webpack Plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
* [Html Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin)
* [Babel Loader](https://www.npmjs.com/package/babel-loader)
* [Sass Loader](https://www.npmjs.com/package/sass-loader)
* [Style Loader](https://www.npmjs.com/package/style-loader)
* [Css Loader](https://www.npmjs.com/package/css-loader)
* [Node Sass](https://www.npmjs.com/package/node-sass)

## Frameworks 

* Testing Framework: [Jest](https://jestjs.io/)
* Node.js Framework: [Express](https://expressjs.com/)  

## Dependencies & Middlewares

* [Body Parser](https://www.npmjs.com/package/body-parser)
* [CORS](https://www.npmjs.com/package/cors)

## API'S

* [Axios](https://www.npmjs.com/package/axios)

* JSON

## Author

* Mohamed Elhawary  

## Contact Me via my Social Accounts

* Email: mohamed.k.elhawary@gmail.com  

* [Linkedin](https://www.linkedin.com/in/mohamed-elhawary14/)

* [Codepen](https://codepen.io/Mohamed-ElHawary)

* [Behance](https://www.behance.net/mohamed-elhawary14)

## Deploy with Me

Feel Free to Deploy it with me, send Issues or a Pull Request and i'll deal with you, just test it First.

## Notices & Overview about the App

- This Application is a Practical Project from Udacity Nanodegree Program in the Field of Web Development Advanced Track.

- The App depends on the NLP (Natural Language Processing) technology to evaluate any text, articles or blogs, using an API from the (MeaningCloud) platform. This platform provides to the developers using its (NLP) technology thorugh its API's. 

- Natural Language Processing leverages machine learning and deep learning create a program that can interpret natural human speech.

- Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence, concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data. You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms.

- NLP on Human Voice: 
  --------------------
  * For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

- NLP on Text
  ---------------------
  * An example is Grammarly editing tool, which parses the text that you write, and suggests if the tone is professional or not. Another example is the Smart Compose feature for Gmail that uses NLP to suggest words and statements based on your current context.

## License

Licensed under the [MIT License](LICENSE).