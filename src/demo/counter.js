export class Counter {
    constructor() {
        this.max = 100;
    }

    start() {
        this.count = 0;
        let title = "start";
        setInterval(() => {
            let title = "counter";
            {
                let title = "test";
            }
            this.count ++;
        }, 2000)
    }
}