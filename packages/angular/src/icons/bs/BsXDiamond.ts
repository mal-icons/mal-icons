import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-x-diamond",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsXDiamond {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.99 16a1.53 1.53 0 0 1-1.07-0.45L0.45 9.08a1.53 1.53 0 0 1 0-2.16L6.920.45a1.53 1.53 0 0 1 2.17 0l6.47 6.47A1.53 1.53 0 0 1 16 8.01a1.53 1.53 0 0 1-0.45 1.07l-6.47 6.47A1.53 1.53 0 0 1 7.99 16zM7.64 1.17 4.77 4.04 8 7.28l3.23-3.23L8.36 1.17a0.510.51 0 0 0-0.72 0M8.72 8l3.23 3.23 2.87-2.87c0.2-0.20.2-0.52 0-0.72l-2.87-2.87zM8 8.72l-3.23 3.23 2.87 2.87c0.20.20.520.20.72 0l2.87-2.87zM7.28 8 4.04 4.77 1.17 7.64a0.510.51 0 0 0 0 0.72l2.87 2.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsXDiamond;
