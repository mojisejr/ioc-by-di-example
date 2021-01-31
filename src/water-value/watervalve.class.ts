import { injectable } from "inversify";

@injectable()
export class WaterValve {
  open() {
    console.log("เปิดวาล์วด้วยมือ");
  }
  close() {
    console.log("ปิดวาล์วด้วยมือ");
  }
}
