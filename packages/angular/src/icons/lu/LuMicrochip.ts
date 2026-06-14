import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-microchip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMicrochip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 12h4"}],["path",{"d":"M10 17h4"}],["path",{"d":"M10 7h4"}],["path",{"d":"M18 12h2"}],["path",{"d":"M18 18h2"}],["path",{"d":"M18 6h2"}],["path",{"d":"M4 12h2"}],["path",{"d":"M4 18h2"}],["path",{"d":"M4 6h2"}],["rect",{"x":"6","y":"2","width":"12","height":"20","rx":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMicrochip;
