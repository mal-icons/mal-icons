import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-veed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVeed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.98 3.45-6.47 15.87a2.41 2.41 0 0 1-2.24 1.5H8.74a2.41 2.41 0 0 1-2.23-1.5L0.01 3.45a0.20.2 0 0 1 0.18-0.27h6.55a0.390.39 0 0 1 0.370.25l4.91 13.08 4.87-13.08c0.06-0.150.2-0.260.37-0.26h6.55c0.14 0 0.230.140.180.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVeed;
