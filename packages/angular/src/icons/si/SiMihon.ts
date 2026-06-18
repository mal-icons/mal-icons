import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mihon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMihon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.29 5.1 3.12 1.06c0.530.1 1.160.13 2.590.13 1.73 0 4.02-0.1 5.2-0.250.5-0.050.7-0.13 1.03-0.3l2.71 2.31c-0.250.35-0.330.5-0.6 1.21-0.230.55-1.26 3.74-1.66 5.1 1.860.38 2.890.65 4.3 1.230.18-1.230.2-1.880.2-4.12 0-0.58-0.02-0.9-0.1-1.43l4.370.15c-0.130.6-0.150.85-0.18 1.83-0.1 2.36-0.2 3.49-0.45 5.2 1.740.88 1.740.88 2.61 1.360.450.250.550.30.850.4l-1.46 4.7c-0.7-0.63-1.68-1.31-3.12-2.11-1.26 2.99-3.34 5.18-6.51 6.91-1.06-1.41-1.86-2.26-3.14-3.27 1.86-0.88 2.71-1.43 3.7-2.360.96-0.93 1.58-1.84 2.19-3.19-1.61-0.73-2.64-1.06-4.42-1.43-1.03 3.07-1.86 5.03-2.59 6.21-0.98 1.58-2.31 2.41-3.84 2.41-1.18 0-2.39-0.53-3.27-1.43C0.53 19.28 0 17.84 0 16.18c0-2.46 1.18-4.6 3.24-5.93 1.33-0.85 2.74-1.23 4.98-1.360.45-1.480.83-2.76 1.18-4.2-1.110.1-2.490.18-4.170.25-0.90.02-1.20.05-1.930.15Zm3.82 7.64c-1.180.2-1.890.58-2.51 1.38-0.480.55-0.7 1.21-0.7 1.91 0 0.780.38 1.360.85 1.360.58 0 1.23-1.31 2.36-4.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMihon;
