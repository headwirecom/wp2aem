# WordPress to AEM Migation

## Node-RED

1. Install Node-RED.

        $ npm install -g node-red

2. Start Node-RED.

        $ node-red

3. Visit [http://127.0.0.1:1880](http://127.0.0.1:1880). The console output will list the host/port as well.

## Configure Node-RED

1. Move into `node-red-contrib-wp2aem` and install the npm modules.

        $ cd node-red-contrib-wp2aem
        $ npm i

2. Let the package manager know about this module.

        $ npm link
        $ cd ~/.node-red
        $ npm link node-red-contrib-wp2aem

3. Stop Node-RED (`<CTRL>+C`)

4. Start Node-RED from the root `wp2aem` project directory. This is required since Node-RED will read/write files relative to this directory. For example, It will write the to AEM content submodule.

        $ cd wp2aem
        $ node-red


## Running a Node-RED Flow

1. Open a browser and visit [http://localhost:1880/](http://localhost:1880/).

2. Import the sample flow. Click the hamburger menu, then Import. Select `wp2aem/node-red-contrib-wp2aem-sample/flow-single-page-sample.json`.

3. Click on the "http request" node and replace "yoursitegoeshere" with your WordPress site's domain name.

4. Click the `Deploy` button in the upper right corner.

5. Run the flow by clicking the blue box next to the `timestamp` node.

6. You should now be able to run the `build.sh` script to deploy the AEM application and content package.

Note: For a full site migration perform the steps above for the "flow-fetch-all-and-write-to-disk.json" flow.
