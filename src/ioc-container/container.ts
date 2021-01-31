import { Container } from "inversify";
import TYPES from "./types";
import { ManualController } from "../controller/manual.controller";
import { ServoMotorController } from "../controller/servo.controller";
import { IValveController } from "../interface/valve.controller.interface";
import { WaterValve } from "../water-value/watervalve.class";
import {
  ManualValve,
  ServoValve,
  WaterValveUpgrade,
} from "../water-value/watervalve.upgrade.class";
import TAGS from "./tags";

const container = new Container();

container
  .bind<IValveController>(TYPES.ValveController)
  .to(ServoMotorController)
  .whenTargetNamed(TAGS.SERVO);

container
  .bind<IValveController>(TYPES.ValveController)
  .to(ManualController)
  .whenTargetNamed(TAGS.MANUAL);

container.bind<WaterValveUpgrade>(TYPES.ServoValve).to(ServoValve);
container.bind<WaterValveUpgrade>(TYPES.ManualValve).to(ManualValve);

const servoValve = container.get<WaterValveUpgrade>(TYPES.ServoValve);
const manualValve = container.get<WaterValveUpgrade>(TYPES.ManualValve);

export { servoValve, manualValve };
