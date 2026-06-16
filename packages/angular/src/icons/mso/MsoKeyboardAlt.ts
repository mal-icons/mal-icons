import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-keyboard-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoKeyboardAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h760q24 0 42 18t18 42v560q0 24-18 42t-42 18H100Zm0-60h760v-560H100v560Zm200-82h360v-64H300v64ZM182-407h87v-86h-87v86Zm170 0h87v-86h-87v86Zm169 0h87v-86h-87v86Zm170 0h87v-86h-87v86ZM182-574h87v-85h-87v85Zm170 0h87v-85h-87v85Zm169 0h87v-85h-87v85Zm170 0h87v-85h-87v85ZM100-180v-560 560Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoKeyboardAlt;
