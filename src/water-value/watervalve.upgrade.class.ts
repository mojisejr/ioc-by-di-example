import { inject, injectable, named } from "inversify";
import TYPES from "./../ioc-container/types";
import TAGS from "./../ioc-container/tags";
import { WaterValve } from "./watervalve.class";
import { IValveController } from "../interface/valve.controller.interface";

@injectable()
export class WaterValveUpgrade extends WaterValve {
  protected controller: IValveController;
  constructor(controller: IValveController) {
    super();
    this.controller = controller;
  }

  open() {
    console.log(`ประตูน้ำ : ${this.controller.open()}`);
  }

  close() {
    console.log(`ประตูน้ำ : ${this.controller.close()}`);
  }
}

@injectable()
export class ServoValve extends WaterValveUpgrade {
  constructor(
    @inject(TYPES.ValveController)
    @named(TAGS.SERVO)
    controller: IValveController
  ) {
    super(controller);
  }
}

@injectable()
export class ManualValve extends WaterValveUpgrade {
  constructor(
    @inject(TYPES.ValveController)
    @named(TAGS.MANUAL)
    controller: IValveController
  ) {
    super(controller);
  }
}
