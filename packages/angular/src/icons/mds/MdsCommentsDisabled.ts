import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-comments-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsCommentsDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17L16.83 14zM2.1 2.10.69 3.51 2 4.83V18h13.17l5.31 5.31 1.41-1.41L2.1 2.1zM6 9h0.17l2 2H6V9zm0 5v-2h3.17l2 2H6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsCommentsDisabled;
