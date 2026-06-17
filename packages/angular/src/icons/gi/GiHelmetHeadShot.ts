import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-helmet-head-shot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHelmetHeadShot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M73.98 19.32l36.7 67.6L20.3 33.51v0.06L122.43 139.94 20.3 93.67v0.3l53.86 60.93-53.85-4.07v0.01l196.61 95.68-68.5 34.29 76.55 18.1-42.9 55.23 72.89-11.63c5.32-8.46 9.98-16.9 13.96-25.48-18.59-11.34-30.99-31.8-30.99-55.16 0-35.66 28.91-64.57 64.57-64.57 22.32 0 41.99 11.34 53.58 28.56l36.55 2.15 35.01-37.64-59.4 9.33 23.36-78.58-63.15 59.25L306.94 67.96l-21.35 110.43-48.26-53.55 6.74 61.11L74.5 19.33h-0.52zm231.11 222.24c-2.27 61.79-26.61 106.51-68.62 156.83l75.13 82.96 41.55-116.15c-6.51 2.47-13.8 3.01-20.98 1.08-18.23-4.88-29.2-23.86-24.32-42.090.21-0.770.44-1.520.7-2.26l1.45-22.51 77.67-3.51h0l65.41 41.47-11.62 24.1c-5.45 17.4-23.93 27.68-41.7 22.92-6.82-1.83-12.62-5.63-16.96-10.62l-22.76 119.71L464.55 459.52c-13.6-67.11-8.6-114.53 21.23-169.62l-83.1-42.59-97.59-5.74zm35.48 75.85c-6.790.15-12.81 4.68-14.67 11.62-2.26 8.46 2.62 16.91 11.1 19.18 8.48 2.27 16.94-2.61 19.2-11.07 2.27-8.46-2.62-16.91-11.1-19.18-1.06-0.28-2.12-0.45-3.17-0.52-0.46-0.03-0.91-0.04-1.37-0.03zm67.6 18.11c-6.790.15-12.81 4.68-14.67 11.62-2.27 8.46 2.62 16.91 11.1 19.19 8.48 2.27 16.94-2.61 19.2-11.07 2.27-8.46-2.62-16.91-11.1-19.19-1.06-0.28-2.12-0.46-3.17-0.52-0.46-0.03-0.91-0.04-1.37-0.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHelmetHeadShot;
