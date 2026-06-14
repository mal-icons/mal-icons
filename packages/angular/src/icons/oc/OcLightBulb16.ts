import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-light-bulb-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLightBulb16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1.5c-2.36 0-4 1.69-4 3.75 0 0.980.42 1.630.98 2.3l0.210.25c0.220.260.470.560.670.850.280.410.540.90.62 1.49a0.750.75 0 0 1-1.480.21c-0.04-0.28-0.16-0.55-0.37-0.85a8.46 8.46 0 0 0-0.54-0.68c-0.08-0.1-0.17-0.2-0.27-0.32C3.2 7.75 2.5 6.77 2.5 5.25 2.5 2.31 4.86 0 8 0s5.5 2.31 5.5 5.25c0 1.52-0.7 2.5-1.33 3.26-0.090.12-0.180.22-0.270.32-0.210.25-0.380.45-0.540.68-0.210.3-0.330.56-0.370.85a0.750.75 0 0 1-1.48-0.21c0.08-0.590.34-1.080.62-1.490.2-0.290.45-0.580.67-0.850.08-0.090.15-0.170.21-0.250.56-0.680.99-1.320.99-2.3 0-2.06-1.64-3.75-4-3.75ZM5.75 12h4.5a0.750.75 0 0 1 0 1.5h-4.5a0.750.75 0 0 1 0-1.5ZM6 15.25a0.750.75 0 0 1 0.75-0.75h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLightBulb16;
