import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-duffle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDuffle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 5.75c1.39 0 2.670.19 3.610.39a18 18 0 0 1 1.430.35l0.110.0300h0a0.50.5 0 0 1-0.310.95l00-0.020a17 17 0 0 0-1.42-0.35A17.3 17.3 0 0 0 8 6.75a17.3 17.3 0 0 0-3.410.37 17 17 0 0 0-1.420.35l-0.020.0100a0.50.5 0 1 1-0.31-0.95A17.3 17.3 0 0 1 8 5.75"}],["path",{"d":"M5.23 2.72c-0.130.46-0.190.95-0.22 1.38-1.40.19-2.650.53-3.52 1.01C-0.64 6.280.04 11.20.39 13.13a0.950.95 0 0 0 0.950.77h13.31a0.950.95 0 0 0 0.95-0.77c0.36-1.92 1.04-6.85-1.09-8.02-0.87-0.48-2.12-0.82-3.52-1.01a7.4 7.4 0 0 0-0.22-1.37c-0.16-0.59-0.44-1.23-0.97-1.62-1.11-0.84-2.48-0.84-3.6 0-0.530.39-0.81 1.03-0.97 1.62M9.2 1.9c0.260.20.470.570.61 1.090.090.320.140.670.171a23.3 23.3 0 0 0-3.96 0 6 6 0 0 1 0.17-1c0.14-0.510.35-0.890.61-1.080.76-0.57 1.64-0.57 2.4 0M8 4.9c2.48 0 4.790.4 6.04 1.090.240.130.470.410.660.930.180.520.28 1.20.3 1.950.05 1.49-0.19 3.09-0.36 4.03H1.37c-0.17-0.94-0.41-2.54-0.36-4.030.02-0.760.12-1.430.3-1.950.18-0.520.42-0.80.66-0.93C3.21 5.3 5.53 4.9 8 4.9"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDuffle;
