import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-starz",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStarz {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.27 9.28C0.38 9.280.13 10.470.13 10.83c0 2.2 2.93 1.4 2.93 2.24 0 0.21-0.160.43-0.740.43-0.63 0-0.76-0.29-0.76-0.51H0c0.010.40.17 1.73 2.33 1.73 1.6 0 2.29-0.75 2.29-1.7 0-2.18-3-1.36-3-2.18 0-0.160.13-0.410.63-0.410.5 0 0.630.250.630.41H4.37c0-0.39-0.21-1.55-2.1-1.55zm2.280.15v1.4h1.42v3.74h1.55V10.83h1.44V9.43Zm5.62 0L8.13 14.57h1.64l0.18-0.56h1.8l0.190.56h1.64L11.55 9.43Zm3.74 0v5.14h1.55v-2.16l1.29 2.16h1.84l-1.31-1.9c0.7-0.310.99-0.930.99-1.56h0c0-0.93-0.61-1.68-2.12-1.68h0zm4.93 0v1.4h2.04l-2.22 3.74h4.18l0.78-1.4h-2.45l2.22-3.74Zm-3.38 1.27h0.68c0.42 0 0.580.230.580.5 0 0.28-0.160.51-0.580.51v0h-0.68zm-4.60.610.56 1.68h-1.12zm12.84 2.71c-0.17 0-0.310.14-0.310.31 0 0.170.140.310.310.31A0.310.31 0 0 0 24 14.33c0-0.17-0.14-0.31-0.31-0.31zm-0.010.06c000.01 0 0.01 0 0.14 0 0.250.110.250.25a0.250.25 0 0 1-0.250.25c-0.14 0-0.25-0.11-0.25-0.25 0-0.130.11-0.240.24-0.25zm-0.090.08v0.33h0.06v-0.13h0.05l0.070.13h0.07l-0.08-0.14a0.10.1 0 0 0 0.05-0.030.090.09 0 0 0 0.02-0.06c0-0.06-0.04-0.1-0.11-0.1zm0.060.06h0.06c0.03 0 0.050.010.050.04 0 0.03-0.020.04-0.050.04h-0.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStarz;
