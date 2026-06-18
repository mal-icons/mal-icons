import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-brenntag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBrenntag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.73 12.01c-0.770.96-1.9 1.88-3.27 2.420.83 1.02 1.25 2.160.94 3.34-0.29 1.13-1.37 2.23-2.9 2.23H6.5v-6h7c3.86 0 7-3.14 7-7S17.36 0 13.5 0h-11v9h4V4h7c1.66 0 3 1.34 3 3s-1.34 3-3 3h-11V24h12c3.86 0 7-3.14 7-7 0-1.71-0.48-3.63-1.77-4.99"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBrenntag;
