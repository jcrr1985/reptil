Angular 8 App:

Description in a nutshell: 1) API is created, served by json-server. A service.ts file is created which continas several methods that make use of Angular httpCLientModule to make requests to the API endpoints. The service is injected in the main component.ts, and its methods, which draws the view, are called here, receiving different parameters.

(PLEASE NOTE: In order to display this webapp correctly, please NPM install json-server and serve the amchartData.json API provided in this project, as the app retrieve all the data from there)

Steps:

1. Created a JSON API, containin the data which fed the functions that generate the charts, and also populates the Angular Material `select` element.
2. Installed json-server as a dependency, started it to serve the API locally on port 3000.
3. chartGenerator.ts file is created, which will work as as service; this contains all the logic to draw and render the charts in its `createCharts(htmlSelector,data)` method. This method will receive the data to construct the charts and the html selector which tell it where to draw it via parameters.
4. Generated a service named `DatumServiceService()` which contains all the logic to fetch data from the API. This is comprised among other things for two methods:
   in the main app component .ts file (`AppComponent`) three variables are declared: `datum1`, `datum2` and `brands`. They'll be assigned values later on. All request are done using httpClientModule that Angular provides.
   a) `GetIssues()` which at moment of being called takes in a parameter whichs tells what API endpoint it's going to perform the GET request. This parameters get concatenated to the baseUrl (http://localhost:3002), so everytime `GetIssues()` gets called received a different parameter, aiming to different endpoints, hence, getting different datam which are stored in the main .ts component variables `datum1` and `datum2;`
   b) `getBrands()` which returns an string array from `brands` endpoint and gets called in the ngOninit() life cycle hook of the main app's components (`AppComponent`) in order to populate the Angular Material `mat-select` with dinamyc `mat-options`AppComponent

5. the `DatumServiceService` service is injected to into `AppComponent` through its constructor, then, in the `ngOnInit` life cycle hook its methods are called and we suscribe to them (As they return Observables).
   As soon as the API sends the data, the logic within the suscriptions assing values to `datum1`, `datum2`, and `brands`.
   6)Inmediately after this, the chartGenerator `createCharts(htmlSelector,data)` are called twice (Because we want 2 charts), receiving:

a) in the first call `datum1` as a parameter for `data` and the `id` of the DIV element in AppComponent.html where I want it to be drawn, in this case `infogr-1`.
b) in the second call `datum2` as a parameter for `data` and the `id` of the DIV element in AppComponent.html where I want it to be drawn.
in this case `infogr-2`.
