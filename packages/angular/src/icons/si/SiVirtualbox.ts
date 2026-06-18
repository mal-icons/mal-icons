import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-virtualbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVirtualbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1.76 5.18 20c0.130.460.250.690.420.950.060.090.130.180.20.260.170.20.370.380.590.530.240.160.490.290.760.370.320.10.610.140.990.14h4.33l1.92-6.61h6.8v3.7a0.110.11 0 0 1-0.110.11h-4.88l-0.81 2.81h5.65a2.92 2.92 0 0 0 1.95-0.72A2.9 2.9 0 0 0 24 19.29v-6.47H12.28l-1.92 6.61H7.94L3.72 4.56h2.92l1.55 5.44H11.1l-2.34-8.25zm15.5 0-2.4 8.25H24v-5.29a2.96 2.96 0 0 0-1.82-2.74 3.04 3.04 0 0 0-1.13-0.22zm2.11 2.81h3.48a0.110.11 0 0 1 0.110.11V7.2h-4.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVirtualbox;
