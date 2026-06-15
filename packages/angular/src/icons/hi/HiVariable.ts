import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-variable",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiVariable {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M4.75 3A23.93 23.93 0 0 0 3 12c0 3.180.62 6.22 1.75 9M19.5 3c0.97 2.78 1.5 5.82 1.5 9s-0.53 6.22-1.5 9M8.25 8.89l1.44-0.89a0.750.75 0 0 1 1.110.4l2.4 7.21a0.750.75 0 0 0 1.10.4l1.45-0.89m-8.250.750.210.09a1.69 1.69 0 0 0 2.06-0.62l4.45-6.68a1.69 1.69 0 0 1 2.06-0.62l0.210.09"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiVariable;
