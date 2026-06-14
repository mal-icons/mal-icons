import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-map-pin-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMapPinX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.75 11.9A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.99 5.54 10.19 7.4 11.8a1 1 0 0 0 1.2 0 19 19 0 0 0 0.09-0.08"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"m21.5 15.5-5 5"}],["path",{"d":"m21.5 20.5-5-5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMapPinX;
