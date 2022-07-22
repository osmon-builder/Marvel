# Marvel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Resume

En la carpeta app se encuentra otra caperta llamada heroes, la cual despliega las carpetas interface, pages, pipe y services

Carpeta services : se realiza el llamado a la api para obterner los diferentes heroes y sus comics

Carpeta pipe: se encuentra el filtro requerido en la aplicacion, se realizo una prueba untaria en este

Carpeta pages: carpeta principal donde se encuentra el core de la aplicacion, en la carpeta se despliega un componente llamado heros-list el cual es la vista principal y desde ahi se rutean los componentes hijos favourites y view-more

heroes-list: se encuentra toda la logica de el boton de 3 raandom comics, loader, obtencion de los heroes y comics, agregar comics a componente favourites, desplegar elacordeon de related comics, obtener y guardar heroes para el componente favourites y logica para abrir el componente view-more

fvourites: Removed comics guardado en el localstorage 

more-view: abrir el modal, agregar comics al componente favourite desde el modal y poder cerrar el modal dando clicl fuera de este.





Carpeta interface: una interface basica de los heroes.

En la carpeta assets se encuentra el scss aplicado, en donde _general.scss se encuentran los estilos principales de la aplicacion; se realizaron funciones para el uso de colores

En la carpeta assets se encuentra el scss aplicado, en donde _modal.scss se encuentran los estilos de el modal aplicado.
Para las imagenes se uso la clase images,
clase heroes-name para el titulo de los heores
favourite-image se uso para la imagen comic en component favourite
favourites se uso para el estilo general de los comic
loader se uso para el estilo de la pagina de loading al abrir la app
u-btn se uso para los diferentes botones
related-comic se uso para el despliegue de los comics en el componente heroes-list







4 test realizados y comprovados que funcionan:
AppComponent:
should create the app
should have as title 'marvel'

FilterPipe:
create an instance
should return a list of heroes

HeroesService:
should be created


