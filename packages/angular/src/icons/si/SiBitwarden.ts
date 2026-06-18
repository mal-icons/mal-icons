import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bitwarden",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBitwarden {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.720.3A0.960.96 0 0 0 21.02 0H2.98a0.960.96 0 0 0-0.70.30.960.96 0 0 0-0.30.7v12c0 0.90.17 1.780.52 2.670.350.880.78 1.66 1.3 2.350.520.68 1.13 1.35 1.85 1.99a21.81 21.81 0 0 0 1.98 1.61c0.610.43 1.240.83 1.89 1.210.660.38 1.130.64 1.40.770.280.130.50.240.660.31a0.920.92 0 0 0 0.81 0c0.17-0.070.39-0.180.67-0.310.28-0.130.74-0.39 1.4-0.77a25.31 25.31 0 0 0 1.89-1.21A21.89 21.89 0 0 0 18.35 20c0.72-0.65 1.33-1.31 1.85-1.99s0.95-1.46 1.3-2.35c0.35-0.880.52-1.770.52-2.66V1a0.950.95 0 0 0-0.3-0.7zm-2.33 12.82c0 4.34-7.4 8.09-7.4 8.09V2.57h7.4v10.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBitwarden;
