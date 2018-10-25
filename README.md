# nanowire-node-plugin-skeleton
This skeleton plugin should make the process of creating a new plugin as easy as possible.

## Commands

- Installation: `yarn install`
- Build: `yarn build`
- Tests: `yarn test`

## Configuration

- Change name field in nanowire.json and package.json to the name of your repository
- Update description inside nanowire.json
- Update this readme

## Environment Variables
The plugin needs the following enviroment variables set:

`PLUGIN_ID`, `POD_NAME` and `CONTROLLER_BASE_URI` environment variable names set.
| Variable name | Expected Value |
| ------------- | ------------- |
| POD\_NAME     | The name of the kubernetes pod or just a random string to identify this particular instance of the plugin running |
| PLUGIN\_ID    | The ID of the plugin as stored in the nanowire database. This is used to fetch the next plugin |
| CONTROLLER\_BASE\_URI | The URI of the controller. You may have to port forward the controller from nanowire's kubernetes cluster if you want to test with the live system |

## Development
The `src` directory has two files. `index.js` contains basic nanowire library setup and `processMessage.js` contains a function `processMessage` which will be run whenever a task appears in the queue for this plugin.

