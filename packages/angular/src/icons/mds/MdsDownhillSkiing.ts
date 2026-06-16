import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-downhill-skiing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDownhillSkiing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 4.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2zm-2.72 16.40.760.27a5.93 5.93 0 0 0 4.34-0.17L22 22.13c-1.050.55-2.240.87-3.50.87-0.86 0-1.68-0.14-2.45-0.41L2 17.47l0.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-0.89-0.94-0.67-2.470.45-3.12l3.48-2.01c1.1-0.64 2.52-0.1 2.91 1.11l0.33 1.08a5.02 5.02 0 0 0 2.83 3.14l0.52-1.6 1.430.46-1.12 3.45A7.03 7.03 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c0.460.180.940.31 1.440.41l-2.13 6.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDownhillSkiing;
