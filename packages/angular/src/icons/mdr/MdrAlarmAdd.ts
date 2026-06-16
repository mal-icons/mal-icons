import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-alarm-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlarmAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.18 5.01 18.1 2.45c-0.42-0.35-1.05-0.3-1.410.13-0.350.42-0.29 1.050.13 1.41l3.07 2.56c0.420.35 1.050.3 1.41-0.13a1 1 0 0 0-0.12-1.41zM4.1 6.55l3.07-2.56c0.43-0.360.49-0.990.13-1.41a0.990.99 0 0 0-1.4-0.13L2.82 5.01a1 1 0 0 0-0.12 1.41c0.350.430.980.48 1.40.13zM12 4a9 9 0 1 0 0 18A9 9 0 0 0 12 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm3-8h-2v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2H9c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlarmAdd;
