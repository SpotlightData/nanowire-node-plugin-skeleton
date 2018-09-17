import { processMessage } from './processMessage';
import SpotlightPipeline from 'spotlight-pipeline-client';

import { name as pluginName } from '../package.json';

const client = new SpotlightPipeline({
  taskHandler: processMessage,
  pluginName,
});

client.start();
