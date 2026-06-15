import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-touchpad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgTouchpad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M20 21C21.66 21 23 19.66 23 18V6C23 4.34 21.66 3 20 3H4C2.34 3 1 4.34 1 6V18C1 19.66 2.34 21 4 21H20ZM4 5H20C20.55 5 21 5.45 21 6V14H3V6C3 5.45 3.45 5 4 5ZM3 16V18C3 18.55 3.45 19 4 19H11V16H3ZM13 19V16H21V18C21 18.55 20.55 19 20 19H13Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgTouchpad;
