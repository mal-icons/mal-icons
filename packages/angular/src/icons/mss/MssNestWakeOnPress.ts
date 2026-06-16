import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nest-wake-on-press",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNestWakeOnPress {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M780-436v-359h100v359H780ZM269-115 39-345l87-90 115 26v-326q0-42 29-71t71-29q42 0 71 29t29 71v172h32l212 103-57 345H269Zm26-60h281l43-249-183-91h-55v-220q0-18-11-29t-29-11q-18 0-29 11t-11 29v399l-154-33-23 23 171 171Zm0 0h281-281Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNestWakeOnPress;
