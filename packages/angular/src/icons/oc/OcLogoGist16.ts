import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-logo-gist-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLogoGist16 {
  readonly viewBox = "0 0 25 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.7 8.73v-1h3.52v5.69c-0.780.37-1.950.64-3.590.64C1.11 14.06 0 11.37 0 8.03 0 4.69 1.13 2 4.63 2c1.62 0 2.640.33 3.280.66v1.05c-1.22-0.5-2-0.73-3.28-0.73-2.57 0-3.48 2.21-3.48 5.06 0 2.850.91 5.05 3.47 5.050.89 0 1.98-0.07 2.53-0.34V8.73Zm10.980.69h0.03c2.220.2 2.750.95 2.75 2.23 0 1.21-0.76 2.41-3.14 2.41-0.75 0-1.83-0.19-2.33-0.39v-0.94c0.470.17 1.220.36 2.330.36 1.62 0 2.06-0.69 2.06-1.42 0-0.71-0.22-1.21-1.77-1.34-2.26-0.2-2.73-1-2.73-2.08 0-1.110.72-2.31 2.92-2.310.73 0 1.560.09 2.250.39v0.94c-0.61-0.2-1.22-0.36-2.27-0.36-1.55 0-1.880.57-1.88 1.34 0 0.690.28 1.04 1.78 1.17Zm8.58-3.33v0.85h-2.42v4.87c0 0.950.53 1.34 1.5 1.340.2 0 0.42 0 0.61-0.03v0.89c-0.170.03-0.50.05-0.690.05-1.31 0-2.5-0.6-2.5-2.13v-5H19.2v-0.48l1.56-0.44V3.9l1.08-0.31v2.5h2.42Zm-13.17-0.03v6.41c0 0.540.190.70.670.7v0.89c-1.14 0-1.72-0.47-1.72-1.72V6.06h1.05Zm0.25-2.33c0 0.44-0.340.78-0.780.78a0.760.76 0 0 1-0.77-0.78c0-0.440.32-0.780.77-0.78s0.780.340.780.78Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLogoGist16;
