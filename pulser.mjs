import EventEmitter from 'events';
export class Pulser extends EventEmitter {
    start() {
        setInterval(() => {
            console.log(`${new Date().toISOString} >>>> pulse`);
            this.emit('pluse')//this  refer to the Pulser object instance
            console.log(`${new Date().toISOString()} <<<< pulse`)
        },1000)
    }
}