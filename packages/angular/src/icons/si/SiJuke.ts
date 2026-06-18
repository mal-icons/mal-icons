import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-juke",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJuke {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.97 15.78c-1.95 0-2.75-0.93-2.75-2.58V8.41c0-0.10.08-0.180.19-0.18h1.5c0.1 0 0.190.080.190.18v4.82a0.870.87 0 0 0 0.880.82c0.47 0 0.85-0.360.88-0.82v-4.82a0.190.19 0 0 1 0.19-0.18h1.5c0.1 0 0.190.080.190.19v4.79c0 1.65-0.8 2.58-2.75 2.58h0Zm-4.49-2.66c0 1.65-0.73 2.58-2.67 2.58H0.19A0.190.19 0 0 1 0 15.52v-1.37c0-0.10.08-0.180.19-0.18h0.68c0.64 0 0.73-0.340.73-0.73V9.58a0.40.4 0 0 0-0.16-0.31L0.26 8.46a0.130.13 0 0 1-0.04-0.140.130.13 0 0 1 0.13-0.09h2.94c0.1 0 0.190.080.190.19v4.71h0Zm10.930.11v2.19a0.190.19 0 0 1-0.190.19h-1.5a0.190.19 0 0 1-0.18-0.18V8.41c0-0.10.08-0.180.18-0.18h1.5c0.1 0 0.190.080.190.19v2.2c0 0.110.050.120.10.03l1.32-2.25c0.08-0.140.16-0.160.34-0.16h1.77c0.1 0 0.140.080.080.19l-2.06 3.39a0.250.25 0 0 0 0 0.24l2.06 3.39c0.060.10.030.19-0.070.19h-1.77c-0.18 0-0.26-0.03-0.34-0.16l-1.32-2.25c-0.06-0.09-0.1-0.08-0.10.03l00Zm9.6-1.31a0.160.16 0 0 1-0.090.13l-2.41 1.45a0.10.1 0 0 0-0.060.09c0 0.040.020.070.060.09l2.45 1.69a0.130.13 0 0 1 0.040.140.130.13 0 0 1-0.130.09h-4.3a0.190.19 0 0 1-0.19-0.18V8.41c0-0.10.08-0.180.19-0.18h4.31c0.06 0 0.110.040.130.09a0.130.13 0 0 1-0.040.14l-2.44 1.69a0.10.1 0 0 0 0 0.18l2.4 1.46c0.070.040.10.080.10.13l00Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJuke;
