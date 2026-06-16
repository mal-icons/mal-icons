import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-comments-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdCommentsDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.83 16H20V4H6.83l-2-2H20c1.1 0 2 0.9 2 2v15.17L18.83 16zM18 6H8.83l2 2H18V6zm0 3h-6.17l2 2H18V9zm0 5v-2h-3.17l2 2H18zm3.9 7.9-1.41 1.41L15.17 18H4c-1.1 0-2-0.9-2-2V4.83L0.69 3.51 2.1 2.1l19.8 19.8zM13.17 16l-2-2H6v-2h3.17l-1-1H6V9h0.17L4 6.83V16h9.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdCommentsDisabled;
