abstract class TackPhoto1 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    // complex calculation
    return 8;
  }
}
// const d1 = new TackPhoto("hello", "blur");  // you can not create a object from the abrastact class

class Instagram1 extends TackPhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public busrt: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
const ic = new Instagram1("hello", "abstract", 5);
ic.getReelTime();
