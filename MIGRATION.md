# WordPress to AEM Migration

THIS IS A WIP AND READY FOR USE.

## Install Node-RED.

1. Install Node-RED.

```
$ sudo npm install -g --unsafe-perm node-red
$ ln -s ~/opt/node/bin/node-red ~/bin/node-red
```

2. Start Node-RED.

```
$ node-red
```

## Configure Node-RED

1. Move into `node-red-contrib-wp2aem` and install the npm modules.

```
$ node-red-contrib-wp2aem
$ npm i
```

2. Let package manager know about this module.

```
$ npm link
$ cd ~/.node-red
$ npm link node-red-contrib-wp2aem
```

3. Restart Node-RED.

## Running a Node-RED Flow

1. Open a browser and visit [http://localhost:1880/](http://localhost:1880/).

2. Import the sample flow. Click the hamburger menu, then Import. Select `wp2aem/node-red-contrib-wp2aem-sample/flow-single-page-sample.json`.

3. Click the `Deploy` button in the upper right corner.

4. Run the flow by clicking the blow box next to the `timestamp` node.

## Deploy the AEM Application

1. From the root project, run:

```
$ mvn clean install -PautoInstallPackage -Padobe-public
```
