import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-aftership",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAftership {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.55 9.6a10.46 10.46 0 0 0-3.39-6.84A10.63 10.63 0 0 0 12 0a10.64 10.64 0 0 0-7.16 2.76 10.47 10.47 0 0 0-3.43 7.74c0 2.370.81 4.67 2.3 6.53a10.62 10.62 0 0 0 5.9 3.7L12 24l2.4-3.27a10.59 10.59 0 0 0 5.9-3.7 10.44 10.44 0 0 0 2.26-7.43zm-11.31 6.28a0.260.26 0 0 1-0.030.130.250.25 0 0 1-0.350.09l-3.91-2.24a1 1 0 0 1-0.5-0.86V8.62a0.260.26 0 0 1 0.03-0.130.250.25 0 0 1 0.35-0.09l3.91 2.24c0.150.090.280.210.370.370.090.150.140.320.140.5v4.37zM12 9.48c-0.18 0-0.35-0.05-0.5-0.13L7.5 7.06a0.240.24 0 0 1-0.09-0.090.250.25 0 0 1 0.09-0.34l4-2.29a1.02 1.02 0 0 1 1.01 0l4 2.29a0.240.24 0 0 1 0.090.090.250.25 0 0 1 0 0.250.270.27 0 0 1-0.090.09l-4 2.29A1 1 0 0 1 12 9.48ZM17.55 13a11 0 0 1-0.50.87l-3.91 2.24a0.250.25 0 0 1-0.38-0.22V11.51c0-0.170.05-0.350.14-0.50.09-0.150.22-0.280.37-0.37l3.91-2.24a0.250.25 0 0 1 0.380.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAftership;
