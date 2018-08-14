# Collaborate By Code

Collaborate by Code is an open source web application that enables users to contribute code via social media or a quiz to produce objects on a shared canvas. Each object is unique to the user’s affiliation with Red Hat to create a visualization that reflects the diversity of individuals within the Red Hat community.

No previous coding experience is necessary to contribute. From designers to writers, we welcome individuals with a variety of skill sets and backgrounds to contribute to this project. So, what are you waiting for? Fork our repo and get hacking!

## Deploying the application locally

1. Clone the repo: `https://github.com/fionawhittington/collaboratebycode.git`
2. Create a mongo database called `collaboratebycode`
3. Launch App: `node server.js`

## Building and Sharing ColLab Image
### Building ColLab Docker Image
```bash
$ docker build -t collab .
```

### Tagging collab image and pushing to Docker
```bash
$ docker tag collab {DOCKER_HUB_USERNAME}/collab
$ docker push {DOCKER_HUB_USERNAME}/collab
```
## Deploying with Docker
### Deploy MongoDB container
```bash
$ docker run -p 27017:27017 --network net --rm --name mongo mongo
```

### Deploy the ColLab app
```bash
$ docker run -it -p 8080:8080 -e MONGO_USERNAME=admin -e MONGO_PASSWORD=admin  -e MONGO_IP=mongo --rm --name collab --network net collab
```

## Deploying on Openshift
### Create a OpenShift Project
```bash
$ oc new-project <PROJECT_NAME>
```

### Create a MongoDB Container in the Project
```bash
$ oc new-app centos/mongodb-26-centos7 -e MONGODB_USER=<USERNAME> -e MONGODB_DATABASE=collaboratebycode -e MONGODB_PASSWORD=<PASSWORD> -e MONGODB_ADMIN_PASSWORD=<ADMIN_PASSWORD>
```

### Identify Mongo Service Internal IP
```bash
$ oc get svc
```

### Create a Collab Container in the Project
```bash
$ oc new-app agreene/collab -e MONGO_USERNAME=<USERNAME> -e MONGO_PASSWORD=<PASSWORD> -e MONGO_IP=<CLUSTER_IP_FROM_PREVIOUS_STEP>
```

### Create a Route for the Collab Deployment
See: https://docs.openshift.com/container-platform/3.3/dev_guide/routes.html
