import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-wind-power",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWindPower {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 3H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h4c0.55 0 1-0.45 1-1s-0.45-1-1-1zM5 7H2c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c0.55 0 1-0.45 1-1s-0.45-1-1-1zM4 21h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1zm9.73-10.39c0.750.23 1.30.78 1.57 1.46l4.27-7.11a2.28 2.28 0 0 0-3.51-2.84l-3.43 3.21c-0.40.37-0.630.9-0.63 1.45v3.93c0.36-0.150.98-0.33 1.73-0.1zm-3.12 1.66c0.16-0.520.48-0.960.89-1.27H3.28a2.28 2.28 0 0 0-0.63 4.47l4.51 1.29c0.530.15 1.10.08 1.58-0.21l2.69-1.61a2.49 2.49 0 0 1-0.82-2.67zm11.6 6.34-2.28-4.1a2.05 2.05 0 0 0-1.26-0.97l-3.18-0.8c0.030.32 0 0.66-0.10.99A2.48 2.48 0 0 1 13 15.5c-0.61 0-0.99-0.22-1-0.22V21c-1.1 0-2 0.9-2 2h6c0-1.1-0.9-2-2-2v-4.28l4.61 4.61c0.890.89 2.330.89 3.22 0 0.72-0.720.88-1.830.38-2.72z"}],["path",{"d":"M12.56 14.43c0.790.24 1.63-0.2 1.87-1 0.24-0.79-0.2-1.63-1-1.87-0.79-0.24-1.630.2-1.87 1-0.240.790.21 1.63 1 1.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWindPower;
