class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock (time, action) {
        if (!(time && action)) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        this.alarmCollection.forEach((elem) => {
            if (elem.time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        })
        this.alarmCollection.push({
            callback: action,
            time: time,
            canCall: true,
        })
    }
    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.time != time);
    }
    getCurrentFormattedTime () {
        return new Date().toLocaleTimeString().slice(0,-3);
    }
    start () {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach((elem) => {
                    if (elem.time === currentTime && elem.canCall) {
                        elem.canCall = false;
                        elem.callback();
                    }
                })
            }, 1000)
        }
    }
    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls () {
        this.alarmCollection.forEach((elem) => {
            elem.canCall = true;
        })
    }
    clearAlarms () {
        this.stop;
        this.alarmCollection = [];
    }

}
