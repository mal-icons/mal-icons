import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-collapse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCollapse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.12 6.47 14 4.34V10h5.66l-2.12-2.12 3.17-3.17-1.41-1.41zM4.71 3.29 3.29 4.71l3.17 3.17L4.34 10H10V4.34L7.88 6.47zM19.66 14H14v5.66l2.12-2.12 3.17 3.17 1.41-1.41-3.17-3.17zM6.47 16.12l-3.17 3.17 1.41 1.41 3.17-3.17L10 19.66V14H4.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCollapse;
