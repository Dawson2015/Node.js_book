import {Pulser} from './pulser.mjs';
// Instantiate a Pulser object
const pulser = new Pulser();//create a Pulser object
//Handler function
pulser.on('pulse', () => {//set up an event listener for the pulse events to invoke the callback function
    console.log(`${new Data().toISOString()} pulse received`);
});
//start it pulsing
pulser.start();