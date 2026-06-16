import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-swipe-up-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSwipeUpAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"15","r":"3","opacity":".3"}],["path",{"d":"m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0V5.83zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSwipeUpAlt;
