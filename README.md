# MoviePal

MoviePal is a web-app that helps answer one of humanity most intriguing questions "which movie to watch when Netflix and chillin ?" by entering your favorite movies the app will provide you with similar movies to watch , provides rating and a summary of the movie

#dependencies 
the main and major dependencies used are : 
react
material-ui 
react-router-dom 

#configarations 

to add configaration file , we will add 2 file first config.json inside components with path moviepal/src/components/config.json
and config.js inside src with path /moviepal/src/config.js 

config.json include json object api including 2 subobjects tastedive that include key , type and limit . Other subobject is theMoviedb include key like this example :
{"api": {
    "tasteDive":{
     "key":"xxxxx-xxxx-xxxxx",
     "type":"movie",
     "limit":"15"
    },
    "theMoviedb":{
     "key":"xxxxxxxxxxxxx"
    }
}     
}

#docker 
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm moviepal:dev
to run the docker container directly 


#docker-compose 
docker-compose up -d --build 
to build the image and fire up the container 

docker-compose stop 
to bring down the container 


