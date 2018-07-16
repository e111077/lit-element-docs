
* [Install pre-requisites](#installprerequisites)
* [Download and serve the start-lit sample project](#downloadandservethestartlitsampleproject)
* [Build the start-lit sample project for production](#buildthestartlitsampleprojectforproduction)

## Install pre-requisites

1.  [Install Git](https://git-scm.com/).

2.  [Install npm and Node.js](https://nodejs.org/en/).

3.  Update npm:
    
    ```bash
    npm install -g npm@latest
    ```

4.  Install Polymer CLI: 

    ```bash
    npm install -g polymer-cli@latest
    ```

## Download and serve the start-lit sample project

1.  Use Git to copy a sample project:

    ```bash
    git clone https://github.com/katejeffreys/start-lit.git
    ```

2.  Go to the `start-lit` folder:

    ```bash
    cd start-lit
    ```

3.  Install the project's dependencies: 

    ```bash
    npm install
    ```

4.  Serve the project locally:

    ```bash
    polymer serve
    ```
    
## Build the start-lit sample project for production

lit-element code needs a few changes for web browsers to load it. During developent, the Polymer CLI development server (`polymer serve`) handles this for you.

To deploy a lit-element project to the web, you need to build it. Configure build options in `polymer.json`, then run `polymer build`.

We've included a sample polymer.json file to get you up and running.

See the [Polymr CLI documentation](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) for more info.

**To build the start-lit sample project:**

1.  Go to your root project folder:

    ```bash
    cd start-lit
    ```

2.  Use Polymer CLI to build your project:

    ```bash
    polymer build
    ```
