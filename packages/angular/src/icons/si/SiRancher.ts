import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rancher",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRancher {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.73 9.01a0.710.71 0 1-0.730.86h-1.54V8.8h0.47a0.880.88 0 0.88-0.87v-0.39c0-0.480.12-0.870.27-0.870.14 0 0.330.390.410.87l0.25 1.48zm-3.49-1.25c0.49 0 0.870.390.890.89v4.56a0.880.88 0 1-0.870.88h-2.36a0.880.88 0 1-0.87-0.87v-1.79a0.870.87 0 0-0.350.7v1.5c0 0.480.40.880.880.88h1.53v2.33a0.540.54 0 1-0.540.54h-2.88a0.540.54 0 1-0.54-0.54v-2.17a0.540.54 0 0-0.54-0.54h-7.2a0.540.54 0 0-0.540.54v2.17a0.540.54 0 1-0.540.54H2.43a0.540.54 0 1-0.54-0.54V10.58L0.59 11.6c-0.060.04-0.140.04-0.19-0.02l-0.37-0.44a0.140.14 0 1-0.01-0.16l1.91-2.91a0.540.54 0 1.49-0.32h10.16a0.540.54 0 1.530.63l-0.21 1.24a0.540.54 0 0.530.63h2.04a0.540.54 0 0.53-0.44c-0.130.04-0.270.06-0.420.06h-1.45c-0.49 0-0.81-0.39-0.74-0.87l0.25-1.48c0.08-0.480.26-0.860.41-0.860.15 0 0.270.40.270.88v0.23c0.02-0.010.05-0.010.08-0.01h4.84zm3.65-0.54c0-0.390.29-0.560.56-0.560.27 0 0.560.170.560.56 0 0.38-0.290.55-0.560.55-0.27 0-0.56-0.17-0.56-0.55zm0.98 0c0-0.31-0.2-0.44-0.42-0.44-0.22 0-0.430.13-0.430.44 0 0.30.210.440.430.440.22-0.010.42-0.140.42-0.44zm-0.61-0.28h0.2c0.1 0 0.20.030.20.17 0 0.08-0.060.13-0.130.15l0.130.23h-0.12l-0.12-0.22h-0.05v0.22h-0.11v-0.55zm0.20.25c0.05 0 0.09-0.030.09-0.08 0-0.06-0.05-0.07-0.09-0.07h-0.1v0.15h0.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRancher;
