import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-crime-scene-tape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCrimeSceneTape {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M390.53 22.85l-72.18 24.5-20.71 38.71 72.19-24.5zm16.83 6.7L394.76 53.09l18.46-6.27zM121 41v54.32l30-10.18V71h41.66l88.39-30zm172.4 14.82l-72.18 24.5-20.71 38.71 72.18-24.5zM391 73.38L361 83.56V205.43l30 9.56zM196.27 88.79l-72.19 24.5-7.59 14.18 30.5 9.72 28.57-9.7zM343 89.67L175.87 146.4 343 199.69zM99.14 121.75l-0.280.090.190.06zm-30.98 9.2l29 40.73 93.37 29.77-29-40.73zm121.95 38.88l29 40.73 93.37 29.77-28.99-40.73zM121 198.18v161.79l30-11.14v-141.09zm191.06 10.54l29 40.73 41.78 13.32 31.55-11.71-8.95-12.57zM169 213.48v128.67l116.62-43.29C281.52 294.4 279 288.47 279 282c0-13.7 11.3-25 25-25 0.56 0 1.120.03 1.680.07zm279.64 44.06l-91.87 34.1-27.06 42.05 91.87-34.1zm-131.71 3.1c7.43 6.44 12.26 14.03 12.06 22.12L343 277.56v-8.6zM304 275c-3.97 0-7 3.03-7 7s3.03 7 7 7 7-3.03 7-7-3.03-7-7-7zm24.64 27.09l-91.87 34.1-27.06 42.05 91.87-34.1zM391 330.14l-30 11.14v83.83l30 6.02zM208.64 346.64l-83.71 31.08 55.95 11.230.71-0.26zM343 347.96l-128.56 47.73L343 421.5zM80.54 387.16l30.36 36.7 88.02 17.67-30.36-36.69zm116.03 23.3l30.36 36.7 88.02 17.67-30.35-36.69zm116.04 23.3l30.36 36.7 88.02 17.67-30.36-36.69zM121 444.24V487h30v-36.73zm48 9.64V487h164.95zm259.65 3.17l20.35 24.6 3.96-19.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCrimeSceneTape;
