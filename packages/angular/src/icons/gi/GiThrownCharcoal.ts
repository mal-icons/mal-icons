import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-thrown-charcoal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiThrownCharcoal {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M176.94 16.31c-48.690-101.06 8.41-156.28 23.19 90.52-18.28 226.380.7 338.19 105.59-73.79-50.61-149.95-75.12-222.75-77 51.32 13.56 102.69 37.99 151.22 74.63C195.68 93.44 104.17 80.47 21.78 95.66c48.09 10.59 97.85 31.53 146.94 65.06-34.34-12.25-68.58-19.27-102.44-23.5 69.17 25.33 135.48 72.1 189.75 141.72C189.96 216.39 117.41 180.8 44.94 167.53c61.55 32.83 101.61 74.72 136.16 135.22-27.14-23.43-55.87-42.91-85.12-59.09 21.83 20.76 42.67 45.1 62 72.91-16.59-14.32-37.69-24.69-64.09-30.97 35.6 30.84 49.23 68.72 71.75 107.72 120.9 209.41 401.15 54.24 299.16-178.47C401.82 71.17 301.37 16.3 176.94 16.31zM389.84 136.47l-7.94 52.69-40.66-23.84 48.59-28.84zM253.5 168.66l73.06 17L275.5 232.72l-36.03-20.03 14.03-44.03zm163.13 42.03L456.47 303l-67.81-4.06-3.72-0.22-2.84 2.37-53.97 45.25-19.09-25.47 3.5-85.15 104.1-25.03zm-136 54.35l7.59 48.5-0.660.5-28.34-9.15 21.41-39.84zm-79.81 24.41l45.16 39.22-45.69 11.940.53-51.16zm203.31 29.16l53.53 3.22-23 68.25-30.53-71.47zm-18.62 4l35.78 83.75-42.69 7.53 9.03 34.03-77.59 22.53-69.56-35.53-14-82.09 70.31-17.12 21.13 28.16-6.06 65.91 18.63 1.72 6.25-67.94 48.78-40.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiThrownCharcoal;
