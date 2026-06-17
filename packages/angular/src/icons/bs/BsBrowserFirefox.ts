import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-browser-firefox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBrowserFirefox {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.38 3.41c0.540.28 1.22 1.15 1.56 1.96a8 8 0 0 1 0.5 3.9l-0.010.08-0.030.22A7.76 7.76 0 0 1 0.01 8.26v-0.04q0.03-0.550.11-1.08c0.01-0.070.08-0.420.09-0.49l0.01-0.05a6.6 6.6 0 0 1 1.04-2.35q0.33-0.460.73-0.870.35-0.360.76-0.65a1.5 1.5 0 0 1 0.26-0.14c-0.020.27-0.04 1.550.27 1.94h0a5.7 5.7 0 0 1 1.87-1.44 3.6 3.6 0 0 0 0.02 1.9q0.110.070.20.15c0.110.090.230.210.450.43l0.070.070.010.01a2 2 0 0 0 0.210.18c0.380.290.940.56 1.310.740.20.10.340.170.360.19l00.01c-0.010.19-0.690.86-0.930.86-2.21 0-2.56 1.34-2.56 1.340.0910.71 1.84 1.52 2.36a4 4 0 0 0 0.440.24q0.110.050.230.09c0.330.120.670.18 1.010.19 3.040.14 4.16-2.8 3.13-4.74v0a3 3 0 0 0-0.73-0.9 3 3 0 0 0-0.57-0.37l00a2.68 2.68 0 0 1 1.870.45 3.92 3.92 0 0 0-3.4-1.98q-0.120-0.230.01l-0.040V4.31h0a4 4 0 0 0-0.80.14 7 7 0 0 0-0.33-0.31 2 2 0 0 0-0.2-0.15 4 4 0 0 1-0.09-0.38 5 5 0 0 1 1.35-0.29l0.050c0.0500.13-0.010.21-0.01C8 2.21 8.730.84 10.170l00.010000h0l00h0.02a0.020.02 0 0 1 0.010.01 2.4 2.4 0 0 0 0.210.48q0.090.150.180.3c0.490.77 1.02 1.38 1.54 1.970.770.87 1.51 1.72 2.04 3.02l0-0.01a8 8 0 0 0-0.79-2.35"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBrowserFirefox;
