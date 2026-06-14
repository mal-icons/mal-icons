import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-question-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcQuestion16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.09h0a0.750.75 0 1 1-1.34-0.67c0.17-0.340.44-0.70.85-0.98C6.85 4.16 7.37 4 8 4a2.76 2.76 0 0 1 1.640.53c0.50.380.860.970.86 1.73 0 0.45-0.110.83-0.33 1.15-0.20.31-0.470.51-0.690.66-0.110.07-0.220.14-0.310.2l-0.010a6.24 6.24 0 0 0-0.260.160.950.95 0 0 0-0.280.250.750.75 0 0 1-1.25-0.83c0.18-0.260.42-0.490.69-0.660.1-0.070.21-0.130.31-0.19l0.010c0.1-0.060.18-0.110.26-0.16a0.970.97 0 0 0 0.28-0.24C8.96 6.51 9 6.43 9 6.25a0.610.61 0 0 0-0.26-0.52A1.27 1.27 0 0 0 8 5.5c-0.37 0-0.590.09-0.740.19a1.01 1.01 0 0 0-0.340.4ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcQuestion16;
