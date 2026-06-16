import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-local-post-office",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLocalPostOffice {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-364h166v-206q0-97 68.25-163.5T480-880h173q94.58 0 160.79 67.5Q880-745 880-650v570h-60v-115H626v115H80Zm546-175h194v-395q0-70.12-48.5-120.06Q723-820 653-820H479.5q-71.57 0-122.53 49Q306-722 306-650v206h320v189ZM400-575v-60h326v60H400Zm-47 313 213-122H140l213 122Zm0 55L140-329v189h426v-189L353-207ZM140-384v244-244Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLocalPostOffice;
