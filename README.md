# WordPress to AEM

This project is a proof-of-concept for migrating content from WordPress into AEM. The goals
of this project are as follows:

1. Deploy to AEM as a Cloud Service.
2. Develop a flexible content migration tool outside of AEM using an opensource project.

## Prerequisites

1. Java JDK 11
2. AEM cloud-ready SDK 
3. Node.js 12.16.1+


## AEM Deployment

1. Clone the `wp2aem` project.

        $ git clone https://github.com/headwirecom/wp2aem.git
        $ cd wp2aem

2. Deploy `wp2aem` to AEM.

        $ mvn clean install -PautoInstallPackage -Padobe-public

3. Follow the steps in the [migration documentation](MIGRATION.md).


## Versions Tested

* Java: 11.0.7 2020-04-14 LTS
* AEM cloud-ready SDK: aem-sdk-quickstart-2020.04.3016.20200422T100410Z-200409.jar
* Node.js: 12.16.1
