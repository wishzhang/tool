interface TimerOption {
  preDuration: number,
  onProgress?: Function
}

/**
 * To calculate the time has pass by, Just like the timer in the running race.
 */
export class Timer {
  private startPoint = -1;
  private duration: number = 0;
  private preDuration: number = 0;
  private interval: any;
  private onProgress: Function;
  private isRuning: boolean = false;

  constructor(opt: TimerOption) {
    this.onProgress = opt.onProgress ? opt.onProgress : new Function();
    this.preDuration = opt.preDuration || 0;
  }

  /**
   * To update by calculating the duration
   */
  private update() {
    if (this.startPoint === -1) {
      this.startPoint = Date.now();
    }
    let segmentDuration = Date.now() - this.startPoint;
    this.duration = this.preDuration + segmentDuration;
    // callback
    this.onProgress(this.duration);
  }

  start() {
    if (!this.isRuning) {
      this.isRuning = true;
      this.update();
      this.interval = setInterval(() => {
        this.update();
      }, 1000);
    }
  }

  pause() {
    if (this.isRuning) {
      this.isRuning = false;
      this.update();
      clearInterval(this.interval);
      this.startPoint = -1;
      this.preDuration = this.duration;
    }
  }

  reset() {
    this.isRuning = false;
    clearInterval(this.interval);
    this.startPoint = -1;
    this.preDuration = 0;
    this.duration = 0;
    this.update();
  }
}
