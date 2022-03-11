/*vi har ett hus med tre fönster. 
Alla fönster har:
- höjd
- bredd

Alla fönster kan:
- öppnas
- stängas
- informera om dess mått
*/

(function () {
  const window1 = {
    height: 150,
    width: 75,
    open() {
      console.log("Window opened");
    },
    close() {
      console.log("Window closed");
    },
    getMeasurements() {
      console.log(`Width: ${this.width}, Height: ${this.height}`);
    },
  };

  const window2 = {
    height: 180,
    width: 100,
    open() {
      console.log("Window opened");
    },
    close() {
      console.log("Window closed");
    },
    getMeasurements() {
      console.log(`Width: ${this.width}, Height: ${this.height}`);
    },
  };

  const window3 = {
    height: 180,
    width: 100,
    open() {
      console.log("Window opened");
    },
    close() {
      console.log("Window closed");
    },
    getMeasurements() {
      console.log(`Width: ${this.width}, Height: ${this.height}`);
    },
  };

  window1.getMeasurements();
  window1.open();
  window1.close();
  window2.getMeasurements();
  window2.open();
  window2.close();
  window3.getMeasurements();
  window3.open();
  window3.close();
})();
