import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bigbasket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBigbasket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.54 12.99a3.35 3.35 0 0 0-0.87-1.37 2.25 2.25 0 0 0-1.47-0.5 2.28 2.28 0 0 0-1.540.54 2.95 2.95 0 0 0-0.97 1.38 5.61 5.61 0 0 0-0.33 1.85 5.42 5.42 0 0 0 0.34 1.81c0.190.550.53 1.030.97 1.410.440.340.990.52 1.540.5a2.08 2.08 0 0 0 1.95-1.07h0a4.92 4.92 0 0 0 0.67-2.65 6.48 6.48 0 0 0-0.27-1.88zM20.380.03H3.59A3.58 3.58 0 0 0 0 3.59V20.38a3.59 3.59 0 0 0 3.59 3.59h16.79c1.99 0 3.6-1.6 3.62-3.59V3.59A3.61 3.61 0 0 0 20.380.03zM10.64 3.03h1.91v5.74a3.47 3.47 0 0 0-1.91-0.58v-5.16zm-0.44 17.93a5.59 5.59 0 0 1-2.28-0.37 3.52 3.52 0 0 1-1.17-0.8 4.18 4.18 0 0 1-0.33-0.54l-0.03-0.13v0.3C6.28 21.27 3.4 20.93 3.4 20.93V3.03h3.15v7.44h0.03a3.68 3.68 0 0 1 1.54-1.31 4.83 4.83 0 0 1 2.08-0.43 4.2 4.2 0 0 1 2.650.87 5.26 5.26 0 0 1 1.68 2.28v0c0.370.950.56 1.960.57 2.98a8.42 8.42 0 0 1-0.57 2.98 5.47 5.47 0 0 1-1.67 2.28 4.16 4.16 0 0 1-2.650.84zm9.83-3.11a5.47 5.47 0 0 1-1.67 2.28 4.17 4.17 0 0 1-2.650.84 5.59 5.59 0 0 1-2.28-0.37 4.85 4.85 0 0 1-0.36-0.19c0.44-0.360.84-0.78 1.17-1.250.350.130.730.19 1.10.19 2.38 0 3.15-2.5 3.15-4.48 0-1.96-0.72-4.52-3.15-4.52a3.06 3.06 0 0 0-1.020.16 6.35 6.35 0 0 0-1.02-1.17c0.11-0.060.22-0.120.33-0.18a4.72 4.72 0 0 1 6.4 2.72l00c0.370.950.57 1.960.57 2.98a8.41 8.41 0 0 1-0.57 2.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBigbasket;
