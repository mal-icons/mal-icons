import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-right-down-arrow-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsRightDownArrowCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.93 4.93c-3.9 3.9-3.9 10.24 0 14.14 3.9 3.9 10.24 3.9 14.14 0 3.9-3.9 3.9-10.24 0-14.14-3.9-3.9-10.24-3.9-14.14 0zm10.61 10.61h-7.07l2.83-2.83-3.53-3.54 1.41-1.41 3.54 3.54 2.83-2.83v7.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsRightDownArrowCircle;
