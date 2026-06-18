import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-simplex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSimplex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.1 0-4.03 4.03L8.130.08 6.11 2.09l3.95 3.95-3.97 3.98L2.14 6.070.11 8.1l3.95 3.95L0 16.1l1.98 1.97 4.06-4.06 3.95 3.95 2.03-2.03-3.95-3.95 3.98-3.97 3.95 3.95-4.03 4.02v0L9.95 18l-4.02 4.03L7.9 24l4.03-4.03 3.95 3.95 2.01-2.01-3.95-3.95 4.03-4.02 3.95 3.95 2.01-2.01-3.95-3.95L24 7.9l-1.97-1.97L18 9.95 14.05 6l4.03-4.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSimplex;
