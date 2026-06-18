import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.64 1.48c0 0.810.67 1.48 1.49 1.48H14.49c1.41 0 2.570.43 3.48 1.290.910.86 1.37 1.97 1.37 3.32 0 1.25-0.46 2.27-1.37 3.07-0.910.78-2.07 1.17-3.48 1.17H9.12c-0.82 0-1.490.66-1.49 1.48 0 0.820.67 1.48 1.49 1.48h5.93l5.34 8.48c0.330.510.80.77 1.40.770.66 0 1.13-0.26 1.4-0.770.27-0.530.22-1.1-0.15-1.69l-4.75-7.56c1.28-0.57 2.3-1.41 3.04-2.520.75-1.13 1.12-2.43 1.12-3.9 0-1.5-0.34-2.81-1.03-3.93-0.66-1.13-1.59-2.01-2.79-2.64C17.420.33 16.04 0 14.49 0H2.13C1.31 0 0.640.660.64 1.48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRive;
