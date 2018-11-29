const EventEmitter = require('events');
class Gym extends EventEmitter {
    constructor() {
        super();
    }
    go(data) {
        setInterval(data => this.emit('data', data), 1000);
    }
}

const gym = new Gym();
gym.on('data', (data) => {
    console.log('Athlete is working out. "${data}"');
});
gym.go('my data');