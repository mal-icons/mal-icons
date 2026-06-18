import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-qt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.69 3.16H3.33L0 6.49v14.35h20.67L24 17.51V3.16zM12.79 18.4l-1.560.73-1.35-2.22c-0.20.06-0.50.09-0.920.09-1.58 0-2.68-0.42-3.3-1.28-0.62-0.85-0.93-2.2-0.93-4.03 0-1.840.32-3.210.95-4.10.63-0.89 1.73-1.34 3.29-1.34 1.56 0 2.660.44 3.28 1.330.630.880.94 2.250.94 4.1 0 1.22-0.13 2.2-0.38 2.95-0.260.75-0.68 1.33-1.27 1.72zm4.74-1.59c-0.86 0-1.45-0.2-1.77-0.59-0.32-0.39-0.48-1.14-0.48-2.23v-3.53H14.11V9.05h1.16V6.84h1.64V9.05h2.09v1.42h-2.09v3.35c0 0.620.05 1.030.14 1.230.090.20.330.30.70.3l1.24-0.050.07 1.33c-0.670.13-1.190.2-1.550.2zm-8.58-9.08c-0.95 0-1.60.31-1.960.94-0.350.63-0.53 1.63-0.53 3.01 0 1.370.17 2.360.52 2.950.340.59 1.010.89 1.980.890.97 0 1.63-0.29 1.97-0.880.34-0.580.51-1.570.51-2.95 0-1.39-0.17-2.4-0.52-3.03-0.35-0.63-1.01-0.94-1.95-0.94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQt;
