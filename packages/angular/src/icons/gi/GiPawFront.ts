import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-paw-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPawFront {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M241.09 26.63c-44.87 55.38-74.01 114.34-88.72 175-23.93-25.61-51.12-49.31-82.19-71.66-38.5 92.77-41.77 146.62-14.78 233.47 0 0 15.47-89.68 29.59-121.84 28.56 20.54 53.6 42.6 75.59 66.16 13.52-55.77 40.9-110.32 82.16-161.25 39.88 48.89 66.25 99.84 80.5 152.97 27.56-35.96 63.65-67.96 105.19-97.84C450.6 255.02 459.73 309.14 458 361.5c27.89-87.56 24.1-181.93-14.78-275.62-45.18 32.51-83.4 68.39-113.38 107.5-15.5-57.8-45.38-113.58-88.75-166.75zm2.13 163.69l-7.31 10.47c-59.16 84.86-58.72 188.23-0.03 273.19l7.53 10.91 7.75-10.75c62.43-86.48 63.05-190.99-0.16-273.66l-7.78-10.16zm0.72 32.5c48.04 70.85 47.7 154.59-0.19 228.84-44.7-72.84-44.9-156.180.19-228.84zm171.13 27.81l-9.69 7.09c-76.93 56.18-104.23 140.8-71.81 222.03l4.5 11.28 9.75-7.25c75.86-56.24 104.19-141.11 71.75-222l-4.5-11.15zm-8.62 29.97c21.21 65.84-0.57 131.47-59.78 180.28-21.37-66.28-0.27-131.54 59.78-180.28zm-310.03 1.03l-4.47 11.5c-26.7 68.61-3.33 140.71 59.13 188.41l9.88 7.53 4.5-11.59c26.69-68.88 4.15-140.79-59.19-188.44l-9.84-7.4zm8.81 30.53c46.37 39.88 62.86 92.51 47 146.19-45.75-39.94-62.72-92.84-47-146.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPawFront;
