import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-clipboard-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuClipboardPen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M21.34 15.66a1 1 0 1 0-3-3l-5.01 5.01a2 2 0 0 0-0.510.85l-0.84 2.87a0.50.5 0 0 0 0.620.62l2.87-0.84a2 2 0 0 0 0.85-0.51z"}],["path",{"d":"M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["rect",{"x":"8","y":"2","width":"8","height":"4","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuClipboardPen;
