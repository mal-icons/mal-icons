import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-aerial-signal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAerialSignal {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M138.19 38.88C67.48 79.48 19.62 155.29 19.62 242.69c0 87.86 48.38 163.97 119.72 204.41-47.45-46.69-78.25-120.54-78.25-204.41 0-83.27 30.22-157.06 77.09-203.81zm237.69 2.31c45.57 46.86 74.75 119.59 74.75 201.5 0 82.13-29.53 154.62-75.31 201.47C444 403.04 490.34 328.56 490.34 242.69c0-85.87-46.02-160.33-114.47-201.5zm-179.28 46.72c-61.42 24.62-105.13 84.56-105.13 154.78 0 70.41 44 130.26 105.69 154.75-41.35-30.25-69.47-88.17-69.47-154.75 0-66.37 27.77-124.45 68.91-154.78zm142.5 8.78c35.18 31.96 57.81 85.57 57.81 146 0 61.13-23.1 114.77-58.97 146.6 52.01-28.25 87.59-83.25 87.59-146.59 0-62.89-35.05-117.57-86.44-146zm-115.22 44.06c-42.65 14.34-73.12 54.45-73.12 101.94 0 47.91 30.97 88.5 74.22 102.5-27.05-18.56-45.97-57.28-45.97-102.5 0-44.57 18.46-83.07 44.88-101.94zm78.09 3.34c23.84 19.93 39.34 56.72 39.34 98.59 0 42.51-15.99 79.48-40.44 99.19 38.42-16.46 65.38-54.75 65.38-99.19 0-44-26.48-81.87-64.28-98.59zM262 211.34c-20.3 0-36.75 16.45-36.75 36.75 0 15.48 9.57 28.74 23.13 34.16v213.13h27.25V282.25c13.56-5.41 23.13-18.67 23.13-34.16 0-20.3-16.45-36.75-36.75-36.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAerialSignal;
