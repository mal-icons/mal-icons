import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-touchpad-mouse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTouchpadMouse {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M659.8-140Q726-140 773-186.86T820-300v-70H500v70q0 66.29 46.8 113.14t113 46.86ZM500-430h130v-147q-54 11-90 51.5T500-430Zm190 0h130q-4-55-40-95.5T690-577v147ZM660-80q-92 0-156-64t-64-156v-120q0-92 64-156t156-64q92 0 156 64t64 156v120q0 92-64 156T660-80ZM140-220v-520 520Zm-60 60v-640h800v206q-12.82-16.72-27.91-30.36Q837-638 820-650v-90H140v520h251q5 15.84 11.5 30.92Q409-174 417-160H80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTouchpadMouse;
