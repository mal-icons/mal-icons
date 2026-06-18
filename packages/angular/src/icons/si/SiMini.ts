import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mini",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMini {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 9.17h7.56c0.48-0.75 1.11-1.34 1.89-1.780.78-0.44 1.63-0.66 2.55-0.660.92 0 1.770.22 2.550.660.790.44 1.42 1.03 1.89 1.78H24l-0.750.75h-6.4a4.28 4.28 0 0 1 0.30.89h5.23l-0.750.75h-4.37c0.010.190.020.340.020.44 0 0.1-0.010.25-0.020.44h3.49l-0.750.75h-2.86a4.07 4.07 0 0 1-0.30.88h2.26l-0.760.75H16.44c-0.470.75-1.1 1.34-1.89 1.79-0.790.44-1.640.67-2.550.67-0.92 0-1.77-0.22-2.55-0.66-0.78-0.44-1.41-1.04-1.89-1.79H5.64l-0.74-0.75h2.26a4.09 4.09 0 0 1-0.3-0.88H4.01l-0.76-0.75h3.49c-0.01-0.19-0.02-0.34-0.02-0.44 0-0.10.01-0.250.02-0.44h-4.36l-0.76-0.75h5.24a4.31 4.31 0 0 1 0.3-0.89H0.75zm7.84 1.07c-0.240.56-0.36 1.14-0.36 1.75 0 0.610.12 1.20.36 1.750.240.560.56 1.040.96 1.440.40.410.880.73 1.440.970.560.24 1.140.36 1.750.360.61 0 1.2-0.12 1.75-0.360.56-0.24 1.04-0.56 1.44-0.970.4-0.40.73-0.890.97-1.440.24-0.560.36-1.140.36-1.75 0-0.61-0.12-1.2-0.36-1.75-0.24-0.56-0.56-1.04-0.97-1.44-0.4-0.4-0.88-0.72-1.44-0.96-0.56-0.24-1.14-0.36-1.75-0.36-0.61 0-1.20.12-1.750.36-0.560.24-1.040.56-1.440.96-0.40.4-0.720.88-0.96 1.44zm0.55 2.94h0.47l-0.01-1.770.57 1.770.5200.56-1.76v1.76h0.5v-2.38l-0.70-0.6 1.9-0.61-1.89-0.670zm3.13 0h0.5v-2.38h-0.5zm1.03 0h0.48v-1.71l0.95 1.71h0.58v-2.38h-0.47v1.72l-0.95-1.72h-0.58zm2.55 0h0.49v-2.38h-0.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMini;
