import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googlecloud",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGooglecloud {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.19 2.38a9.34 9.34 0 0 0-9.23 6.89c0.05-0.02-0.050.01 0 0-3.87 2.55-3.92 8.11-0.25 10.94l0.01-0.01-0.010.03a6.72 6.72 0 0 0 4.08 1.36h5.17l0.030.03h5.19c6.690.05 9.38-8.6 3.84-12.35a9.37 9.37 0 0 0-2.82-4.55l-0.040.040.01-0.05A9.34 9.34 0 0 0 12.19 2.38zm-0.36 4.15c1.24-0.04 2.520.37 3.49 1.15a5.19 5.19 0 0 1 1.86 4.08v0.52c3.53-0.07 3.53 5.26 0 5.19h-5.19l-0.010.01v-0.04H6.79a2.59 2.59 0 0 1-1.07-0.23h0a2.6 2.6 0 1 1 3.44-3.44l3.01-3.01A6.75 6.75 0 0 0 8.11 8.24c0.02-0.010.04-0.030.05-0.02a5.19 5.19 0 0 1 3.67-1.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGooglecloud;
