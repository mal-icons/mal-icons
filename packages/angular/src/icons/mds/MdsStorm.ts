import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-storm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsStorm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.410.82-2.48 2-3.16 3.37-0.13-2.20.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16a7.96 7.96 0 0 0 4.86 3.72c1.980.53 4.160.31 6.07-0.79 1.41-0.82 2.48-2 3.16-3.370.13 2.2-0.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14zM15 17.2A6.01 6.01 0 0 1 6.8 15c-0.11-0.2-0.21-0.4-0.3-0.6-1.2-2.76-0.17-6.06 2.5-7.6 2.86-1.65 6.54-0.67 8.2 2.20.110.20.210.40.30.6 1.2 2.760.17 6.06-2.5 7.6zM12 10c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsStorm;
