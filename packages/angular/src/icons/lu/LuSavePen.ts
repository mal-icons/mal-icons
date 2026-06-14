import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-save-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSavePen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.33 13H8a1 1 0 0-1 1v7"}],["path",{"d":"M14.36 17.63a2 2 0 0-0.510.85l-0.84 2.87a0.50.5 0 0.620.62l2.87-0.84a2 2 0 0.85-0.51l4.01-4.01a1 1 0 10-3-3z"}],["path",{"d":"M7 3v4a1 1 0 1 1h7"}],["path",{"d":"M9 21H5a2 2 0 1-2-2V5a2 2 0 12-2h10.2a2 2 0 11.40.6l3.8 3.8a2 2 0 1.6 1.4v0.3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSavePen;
