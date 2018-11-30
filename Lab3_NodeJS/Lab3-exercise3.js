const EventEmitter = require('events');
class Gym extends EventEmitter {
    constructor() {
        super();
    }
    
    go(msg) {
        this.msg = msg;
        setInterval(() => this.emit('data', this.msg), 1000);
    }
}

const gym = new Gym();
gym.on('data', (msg) => {
    console.log(` ${msg}`);
});
gym.go('Athlete is working out.');