import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-social-pinterest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSocialPinterest {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.49 4.77c-4.23 0-6.36 3.03-6.36 5.56 0 1.530.58 2.89 1.82 3.40.210.080.3900.45-0.22l0.18-0.72c0.06-0.220.04-0.3-0.13-0.49-0.36-0.42-0.59-0.97-0.59-1.75 0-2.25 1.68-4.26 4.38-4.26 2.39 0 3.71 1.46 3.71 3.41 0 2.57-1.14 4.73-2.82 4.73-0.93 0-1.63-0.77-1.4-1.710.27-1.130.79-2.350.79-3.16 0-0.73-0.39-1.34-1.2-1.34-0.95 0-1.720.98-1.72 2.3 0 0.840.29 1.410.29 1.41l-1.15 4.85c-0.34 1.44-0.05 3.21-0.02 3.390.010.10.150.130.210.050.09-0.11 1.22-1.52 1.61-2.910.11-0.40.63-2.440.63-2.440.310.59 1.21 1.11 2.17 1.11 2.86 0 4.8-2.61 4.8-6.10-2.64-2.24-5.1-5.64-5.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSocialPinterest;
