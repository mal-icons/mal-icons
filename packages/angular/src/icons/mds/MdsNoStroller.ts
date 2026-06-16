import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-no-stroller",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNoStroller {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.91 8.08 6.53 3.7C7.6 3.25 8.77 3 10 3c1.56 0 3.030.4 4.3 1.1l-3.39 3.98zm10.28 13.11-4.78-4.78-5.75-5.75-7.85-7.85-1.42 1.41 7.97 7.97L5.27 17h8.9l1.13 1.13c-0.880.33-1.47 1.25-1.26 2.280.150.760.78 1.39 1.54 1.54 1.030.21 1.95-0.38 2.28-1.26l1.91 1.91 1.42-1.41zM6 18c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zM17 6.27c0.58-0.680.97-1.27 1.65-1.270.77 0 1.350.66 1.35 1.48V7h2v-0.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11L17 14.17v-7.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNoStroller;
