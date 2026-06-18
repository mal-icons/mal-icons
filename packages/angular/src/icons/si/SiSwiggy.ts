import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-swiggy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSwiggy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.03 24c-0.38-0.41-2.08-2.58-3.95-5.51-0.55-0.92-0.9-1.63-0.83-1.810.18-0.48 3.36-0.74 4.33-0.310.30.130.290.310.290.41 0 0.44-0.02 1.62-0.02 1.62a0.440.44 0 1 0 0.880l0-2.94c0-0.25-0.28-0.32-0.33-0.33-0.510-1.55-0.01-2.66-0.01-2.46 0-3.010.1-3.42-0.17-0.9-0.59-2.38-4.58-2.42-6.82C3.85 4.96 5.72 2.23 8.360.87A8.13 8.13 0 0 1 12.03 0c4.18 0 7.62 3.15 8.07 7.21l00.01c0.080.98-5.32 1.19-6.390.9-0.16-0.04-0.21-0.21-0.21-0.28L13.5 5a0.440.44 0 0 0-0.880l0.01 3.87a0.330.33 0 0 0 0.270.32l3.350c1.79 0 2.540.21 3.040.590.330.250.460.740.35 1.37C18.63 16.76 12.27 23.71 12.03 24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSwiggy;
