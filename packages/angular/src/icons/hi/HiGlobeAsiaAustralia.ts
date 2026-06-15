import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-globe-asia-australia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiGlobeAsiaAustralia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12.75 3.03v0.57c0 0.330.150.650.410.86l1.070.89c0.440.370.54 1.010.22 1.49l-0.510.77a2.25 2.25 0 0 1-1.160.89l-0.140.05a1.11 1.11 0 0 0-0.57 1.66c0.370.560.17 1.31-0.43 1.61L9 13.13l0.42 1.06a0.960.96 0 0 1-1.650.93l-0.68-0.91a1.13 1.13 0 0 0-1.910.17L4.5 15.75l-0.610.15M12.75 3.03a9 9 0 0 0-8.86 12.87M12.75 3.03a9 9 0 0 1 6.69 14.04m0 0-0.18-0.53A2.25 2.25 0 0 0 17.13 15H16.5l-0.32-0.32a1.45 1.45 0 0 0-2.330.38l-0.040.07a1.59 1.59 0 0 1-0.980.82l-0.990.28c-0.550.16-0.890.7-0.8 1.27l0.070.44c0.080.470.490.820.970.820.85 0 1.60.54 1.87 1.35l0.220.64m5.28-3.67a9.01 9.01 0 0 1-5.28 3.67m0 0a9 9 0 0 1-10.27-4.83M15.75 9c0 0.9-0.39 1.7-1.02 2.25"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiGlobeAsiaAustralia;
