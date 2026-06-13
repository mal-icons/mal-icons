import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-apps-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoAppsOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"64","y":"64","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"216","y":"64","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"368","y":"64","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"64","y":"216","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"216","y":"216","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"368","y":"216","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"64","y":"368","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"216","y":"368","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"368","y":"368","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoAppsOutline;
