import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-auto-fix-normal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAutoFixNormal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20 7 0.94-2.06L23 4l-2.06-0.94L20 1l-0.94 2.06L17 4l2.060.94zm-1.59 2.83-4.24-4.24L1.59 18.17l4.24 4.24L18.41 9.83zm-4.2 1.38L12.8 9.8l1.38-1.38 1.41 1.41-1.38 1.38z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAutoFixNormal;
