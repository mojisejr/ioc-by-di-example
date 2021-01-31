import { injectable } from "inversify";
import { IValveController } from "./../interface/valve.controller.interface";

@injectable()
export class ManualController implements IValveController {
  open() {
    return "เปิดด้วยมือ";
  }

  close() {
    return "ปิดด้วยมือ";
  }
}
