import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-timer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiTimer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.34,9.69A9.93,9.93,0,0,0,13.59,21.81,9.93,9.93,0,0,0,20.71,7.23,10.05,10.05,0,0,0,12,2.07a0.510.51,0,0,0-0.50.5v4.2a0.50.5,0,0,0,1,0v-4.2l-0.50.5a8.94,8.94,0,0,1,8.43,11.89A8.94,8.94,0,0,1,6.47,19.03,9.04,9.04,0,0,1,3.3,9.95c0.14-0.63-0.82-0.9-0.96-0.27Z"}],["path",{"d":"M7.4,8.12a0.50.5,0,0,1,0.71-0.71l4.24,4.24h0a0.50.5,0,0,1-0.710.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiTimer;
