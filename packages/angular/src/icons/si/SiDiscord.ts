import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-discord",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDiscord {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.32 4.37a19.79 19.79 0 0-4.89-1.520.070.07 0 0-0.080.04c-0.210.38-0.440.86-0.61 1.25-1.84-0.28-3.68-0.28-5.49 0-0.16-0.39-0.41-0.87-0.62-1.25a0.080.08 0 0-0.08-0.04 19.74 19.74 0 0-4.89 1.520.070.07 0 0-0.030.03C0.53 9.05-0.32 13.580.1 18.06a0.080.08 0 0.030.06c2.05 1.51 4.04 2.42 5.99 3.03a0.080.08 0 0.08-0.03c0.46-0.630.87-1.3 1.23-1.99a0.080.08 0 0-0.04-0.11c-0.65-0.25-1.27-0.55-1.87-0.89a0.080.08 0 1-0.01-0.13c0.13-0.090.25-0.190.37-0.29a0.070.07 0 1.08-0.01c3.93 1.79 8.18 1.79 12.06 0a0.070.07 0 1.080.01c0.120.10.250.20.370.29a0.080.08 0 1-0.010.13 12.3 12.3 0 1-1.870.890.080.08 0 0-0.040.11c0.360.70.77 1.36 1.23 1.99a0.080.08 0 0.080.03c1.96-0.61 3.95-1.52 6-3.03a0.080.08 0 0.03-0.06c0.5-5.18-0.84-9.67-3.55-13.66a0.060.06 0 0-0.03-0.03zM8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42 0-1.330.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.33-0.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.09-2.16-2.42 0-1.330.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.33-0.95 2.42-2.16 2.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDiscord;
