import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-joystick-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxJoystickAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"15","cy":"13","r":"1"}],["circle",{"cx":"17","cy":"11","r":"1"}],["path",{"d":"M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z"}],["path",{"d":"M15 5H9a7 7 0 0 0-7 7 7 7 0 0 0 7 7h6a7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 12H9A5 5 0 1 1 9 7h6a5 5 0 1 1 0 10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxJoystickAlt;
