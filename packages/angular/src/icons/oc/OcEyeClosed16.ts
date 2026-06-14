import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-eye-closed-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcEyeClosed16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.14 2.31a0.750.75 0 0 1 1.05-0.17l14.5 10.5a0.750.75 0 1 1-0.88 1.21l-2.25-1.63C11.35 13.19 9.79 14 8 14c-1.98 0-3.67-0.99-4.93-2.08C1.8 10.830.88 9.580.43 8.9a1.62 1.62 0 0 1 0-1.8c0.35-0.531-1.42 1.87-2.31L0.31 3.36A0.750.75 0 0 1 0.14 2.31Zm1.54 5.62A0.120.12 0 0 0 1.66 8c0 0.020.010.050.020.070.410.62 1.24 1.75 2.37 2.72C5.18 11.76 6.53 12.5 8 12.5c1.2 0 2.31-0.49 3.29-1.19L9.06 9.7A2 2 0 0 1 6.06 7.52L3.53 5.69a14.21 14.21 0 0 0-1.85 2.24ZM8 3.5c-0.52 0-1.020.09-1.50.25a0.750.75 0 1 1-0.47-1.42A6.21 6.21 0 0 1 8 2c1.98 0 3.670.99 4.93 2.08 1.27 1.09 2.19 2.35 2.64 3.02a1.62 1.62 0 0 1 0 1.8c-0.110.17-0.250.37-0.410.59a0.750.75 0 1 1-1.21-0.89c0.15-0.20.27-0.380.37-0.53a0.120.12 0 0 0 0-0.14c-0.41-0.62-1.24-1.75-2.37-2.72C10.83 4.24 9.47 3.5 8 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcEyeClosed16;
