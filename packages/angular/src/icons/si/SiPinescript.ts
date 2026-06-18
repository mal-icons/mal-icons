import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pinescript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPinescript {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.79 16.140.12 21.29c-0.310.44 0 1.040.54 1.04h22.68c0.54 0 0.85-0.610.54-1.04l-4.2-5.93-1.98 1.16c-0.04 1.06-0.91 1.91-1.98 1.91-1.09 0-1.98-0.89-1.98-1.98 0-0.050-0.110.01-0.16l-3.17-2.33c-0.340.28-0.770.45-1.250.45-0.56 0-1.06-0.23-1.42-0.61l-4.12 2.35Zm7.69-14.19L3.81 12.73c-0.220.31-0.130.750.20.95l0.690.42 2.66-1.51a1.75 1.75 0 0 1-0.01-0.16c0-1.090.89-1.98 1.98-1.98 1.09 0 1.980.89 1.98 1.98 0 0.14-0.010.27-0.040.4l3.05 2.24c0.36-0.370.86-0.59 1.41-0.590.63 0 1.20.3 1.560.76l2.83-1.66c0.22-0.220.26-0.580.07-0.85L12.55 1.95c-0.26-0.37-0.81-0.37-1.070Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPinescript;
