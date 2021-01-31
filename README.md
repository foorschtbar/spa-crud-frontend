# spa-crud-frontend

A demo frontend for the REST backend of [spa-crud-backend](https://github.com/foorschtbar/spa-crud-backend) with the four basic functions of persistent storage:

* Create
* Read
* Update
* Delete

The demo frontend is hosted at [GitHub Pages](https://foorschtbar.github.io/spa-crud-frontend/) (works only if backend container is running).

## ToDo

- [Dialog](https://material-ui.com/components/dialogs/) to confirm delete
- Move Create/Update/View-Forms to a [Dialog](https://material-ui.com/components/dialogs/)
- Sort [Table](https://material-ui.com/components/tables/#sorting-amp-selecting)

## Usage

For live edditing and developing, you could use this `docker-compose.yml` file:

```yml
version: "3"

services:
  app:
    image: node
    user: node
    working_dir: /app/
    restart: unless-stopped
    command: "npm start"
    volumes:
      - ./code:/app
```

## Futher informations

### React
* https://reactjs.org/docs/getting-started.html
* https://create-react-app.dev/docs/production-build/
* https://reactrouter.com/web/guides/quick-start
* https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/
* https://developer.okta.com/blog/2018/08/23/symfony-react-php-crud-app

### Material UI
* https://material-ui.com/getting-started/usage/

### Lando
* https://docs.lando.dev/guides/frontend.html
* https://docs.lando.dev/config/node.html
* https://docs.lando.dev/config/services.html
* https://github.com/dgading/lando-decoupled/blob/master/.lando.yml