import "reflect-metadata";
import { servoValve, manualValve } from "./ioc-container/container";

//servo controll
servoValve.open();
servoValve.close();

//manual controll
manualValve.open();
manualValve.close();
