import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-phone-enabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPhoneEnabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.46 5c-0.060.89-0.21 1.76-0.45 2.59l1.2 1.2c0.41-1.20.67-2.470.76-3.79h-1.51zM7.6 17.02c-0.850.24-1.720.39-2.60.45v1.49c1.32-0.09 2.59-0.35 3.8-0.75l-1.2-1.19zM16.5 3H20c0.55 0 1 0.45 1 1 0 9.39-7.61 17-17 17-0.55 0-1-0.45-1-1v-3.49c0-0.550.45-1 1-1 1.24 0 2.45-0.2 3.57-0.570.1-0.040.21-0.050.31-0.050.26 0 0.510.10.710.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.020.37-1.120.57-2.320.57-3.57 0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPhoneEnabled;
