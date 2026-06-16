import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-unfold-less-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrUnfoldLessDouble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.46 5.7-2.47 2.46L9.53 5.7a11 0 1 0-1.41 1.41l3.17 3.18c0.390.39 1.020.39 1.41 0l3.17-3.18a11 0 1 0-1.41-1.41z"}],["path",{"d":"m14.460.7-2.47 2.46L9.530.7a11 0 1 0-1.41 1.41l3.17 3.18c0.390.39 1.020.39 1.41 0l3.17-3.18A11 0 1 0 14.460.7zM9.54 23.3l2.47-2.46 2.46 2.46a11 0 1 0 1.41-1.41l-3.17-3.18a11 0 0 0-1.41 0l-3.17 3.18a11 0 1 0 1.41 1.41z"}],["path",{"d":"m9.54 18.29 2.47-2.45 2.46 2.46a11 0 1 0 1.41-1.41l-3.17-3.18a11 0 0 0-1.41 0l-3.17 3.17a11 0 1 0 1.41 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrUnfoldLessDouble;
