import { injectable } from "inversify";
import { IValveController } from "./../interface/valve.controller.interface";

@injectable()
export class ServoMotorController implements IValveController {
  open() {
    return "เปิดด้วย servo motor";
  }

  close() {
    return "ปิดด้วย servo motor";
  }
}
