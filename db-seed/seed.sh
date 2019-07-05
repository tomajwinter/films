
#!/bin/bash

echo 'Starting to seed data: '
mongoimport --host mongodb --db films-dev --collection films --type json --file films.json --jsonArray --drop
printf 'Done!'
