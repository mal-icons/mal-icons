import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-usb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuUsb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"10","cy":"7","r":"1"}],["circle",{"cx":"4","cy":"20","r":"1"}],["path",{"d":"M4.7 19.3 19 5"}],["path",{"d":"m21 3-3 1 2 2Z"}],["path",{"d":"M9.26 7.68 5 12l2 5"}],["path",{"d":"m10 14 5 2 3.5-3.5"}],["path",{"d":"m18 12 1-1 1 1-1 1Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuUsb;
