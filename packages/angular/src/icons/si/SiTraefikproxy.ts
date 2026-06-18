import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-traefikproxy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTraefikproxy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.19c1.09 0 2.060.77 2.06 1.71 0 0.95-0.92 1.72-2.06 1.72-0.13 0-0.3-0.02-0.51-0.06a0.690.69 0 0 0-0.470.08l-7.37 4.2a0.340.34 0 0 0 00.6l7.99 4.49c0.210.120.460.120.67 0l8.03-4.47a0.340.34 0 0 0 0-0.6l-2.51-1.42a0.680.68 0 0 0-0.670l-2.65 1.47a0.230.23 0 0 0-0.120.18l00.03c0 0.95-0.92 1.71-2.06 1.71s-2.06-0.77-2.06-1.71c0-0.950.92-1.71 2.06-1.710.04 0 0.0900.140.01l0.090.010.10.01a0.690.69 0 0 0 0.43-0.08l3.91-2.17c0.3-0.170.66-0.170.97-0.02l0.040.02 5.47 3.1c0.690.390.69 1.370.03 1.77l-0.040.02-3.66 2.03a0.340.34 0 0 0 0.010.6l3.62 1.91c0.720.380.74 1.40.03 1.8l-10.99 6.27a1.03 1.03 0 0 1-1.02 0L0.53 16.43a1.03 1.03 0 0 1 0.03-1.81l3.66-1.91a0.340.34 0 0 0 0.01-0.6L0.52 10.03a1.03 1.03 0 0 1-0.04-1.77l0.04-0.02L9.62 3.06a0.690.69 0 0 0 0.31-0.37l0.01-0.04c0.32-0.95 1.05-1.47 2.06-1.47Zm5.08 12.63-4.49 2.59-0.040.02c-0.310.16-0.670.15-0.97-0.02l-4.48-2.53a0.680.68 0 0 0-0.65-0.01L3.86 15.22a0.340.34 0 0 0-0.010.6l7.89 4.51c0.210.120.470.120.68 0l7.96-4.55a0.340.34 0 0 0-0.01-0.6l-2.62-1.38a0.680.68 0 0 0-0.660.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTraefikproxy;
