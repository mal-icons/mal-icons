import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-earthquake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEarthquake {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360.5-80q-10.5 0-18.48-5.62T331-101L228-450H110q-12.75 0-21.37-8.68Q80-467.35 80-480.17 80-493 88.63-501.5T110-510h140q9.92 0 17.93 5.63Q275.95-498.75 279-489l76 256 136-623q2-11 10.25-17.5T520-880q10.5 0 18.75 6T549-857l94 423 68-225q3.06-9.75 11.09-15.37 8.03-5.62 17.97-5.62t17.44 5q7.5 5 10.5 14l54 151h28q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-450h-50q-9.85 0-17.42-5.5Q775-461 772-470l-30-83-74 252q-2.89 9.63-10.83 15.82Q649.22-279 639.11-280T621-287q-8-6-10-16l-91-402-131 602q-2.25 10.39-10.12 16.32Q371-80.74 360.5-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEarthquake;
