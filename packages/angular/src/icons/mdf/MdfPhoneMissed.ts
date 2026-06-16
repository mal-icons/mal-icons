import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-phone-missed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPhoneMissed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 5.5 12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17A16.97 16.97 0 0 0 12 12C7.46 12 3.34 13.780.29 16.67c-0.180.18-0.290.43-0.290.71s0.110.530.290.71l2.48 2.48c0.180.180.430.290.710.290.27 0 0.52-0.110.7-0.280.79-0.74 1.69-1.36 2.66-1.850.33-0.160.56-0.50.56-0.9v-3.1c1.45-0.48 3-0.73 4.6-0.73 1.6 0 3.150.25 4.60.72v3.1c0 0.390.230.740.560.90.980.49 1.87 1.12 2.67 1.850.180.180.430.280.70.280.28 0 0.53-0.110.71-0.29l2.48-2.48c0.18-0.180.29-0.430.29-0.71s-0.12-0.52-0.3-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPhoneMissed;
