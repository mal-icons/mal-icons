import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-keyboard-hide",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoKeyboardHide {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-40 333-188h295L480-40ZM140-280q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H140Zm0-60h680v-440H140v440Zm184-65h313v-60H324v60ZM197-530h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60ZM197-655h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60ZM140-340v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoKeyboardHide;
