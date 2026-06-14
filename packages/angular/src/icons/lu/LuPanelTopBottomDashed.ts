import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-panel-top-bottom-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPanelTopBottomDashed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 15h1"}],["path",{"d":"M14 9h1"}],["path",{"d":"M19 15h2"}],["path",{"d":"M19 9h2"}],["path",{"d":"M3 15h2"}],["path",{"d":"M3 9h2"}],["path",{"d":"M9 15h1"}],["path",{"d":"M9 9h1"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPanelTopBottomDashed;
