import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-keyboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuKeyboard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8h0.01"}],["path",{"d":"M12 12h0.01"}],["path",{"d":"M14 8h0.01"}],["path",{"d":"M16 12h0.01"}],["path",{"d":"M18 8h0.01"}],["path",{"d":"M6 8h0.01"}],["path",{"d":"M7 16h10"}],["path",{"d":"M8 12h0.01"}],["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuKeyboard;
