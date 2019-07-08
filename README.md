# Films (TBC)

## Background

An app that allows you to add films you have watched, with a rating, and want to watch. It also provides a list of recommended films.

## Development

You can run everything in `Docker`. From the root of the repo, you just need to run:

```
$ docker-compose up
```

This will give you a give you a working client, API and perisistence layer. The client is available http://localhost:3000 running in dev mode. You can follow the [seeding instruction below](#seed-data)

#### Seed data

You add seed Mongodb with some dummy data by running:
```
$ docker-compose run mongodb-seed /bin/seed.sh
```
*NOTE* This is resets Mongodb, deleting any data currently in there.

### Specs

There is currently 100% test coverage and linting plumbed in. You can run the `frontend` specs with:

```
$ ./scripts/specs-client.sh
```
this will also start a watcher looking for code changes and re-running the specs.

You can run the `backend` specs with:

```
$ ./scripts/specs-api.sh
```

You can add `--coverage` or/and `--watchAll` to the end for other options.

### Client

You can find more information on the client via its README in the `frontend` folder.

### API

You can find more information on the api via its README in the `backend` folder.

### MongoDB

The API used `Mongodb` for it's perisistence layer. In development it will fire up a docker container running `Mongodb` and will point the API at it.


### Adding a new package to `package.json`

Because everthing runs in Docker, you need to actually install the new packages in Docker too otherwise you would need to download all the packages to your local machine in order to update the `package-lock.json` file. So you would update your `package.json` file and run the command below, using the correct one depending on whether you are `frontend` or `backend`.

```
$ docker-compose run --rm jukebox-api npm install
$ docker-compose run --rm jukebox-client npm install
```

This would install the new package as well as updating the `package-local.json` file on your machine. You'll then need to stop all the containers `CTR C` and rebuild the images, as they install the npms on the image.

```
$ doc build
```

You can then start all the containers again `doc up`
