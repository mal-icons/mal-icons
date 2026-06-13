import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-keypad-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoKeypadOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"448","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"256","cy":"320","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"256","cy":"64","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"384","cy":"320","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"384","cy":"192","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"384","cy":"64","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"128","cy":"320","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"128","cy":"192","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"128","cy":"64","r":"32","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoKeypadOutline;
