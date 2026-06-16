import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-alarm-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlarmOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.94 10.11-4.4 4.42-1.6-1.6a0.750.75 0 0 0-1.06 0c-0.290.29-0.290.77 0 1.06L10 16.11c0.290.290.770.29 1.06 0L16 11.17c0.29-0.290.29-0.77 0-1.06a0.750.75 0 0 0-1.06 0zm6.24-5.1L18.1 2.45c-0.42-0.35-1.05-0.3-1.410.13-0.350.42-0.29 1.050.13 1.41l3.07 2.56c0.420.35 1.050.3 1.41-0.13a1 1 0 0 0-0.12-1.41zM4.1 6.55l3.07-2.56c0.43-0.360.49-0.990.13-1.41a0.990.99 0 0 0-1.4-0.13L2.82 5.01a1 1 0 0 0-0.12 1.41c0.350.430.980.48 1.40.13zM12 4a9 9 0 1 0 0 18A9 9 0 0 0 12 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlarmOn;
