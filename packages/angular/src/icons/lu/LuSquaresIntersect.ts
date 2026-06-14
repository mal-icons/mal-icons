import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-squares-intersect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSquaresIntersect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 22a2 2 0 0 1-2-2"}],["path",{"d":"M14 2a2 2 0 0 1 2 2"}],["path",{"d":"M16 22h-2"}],["path",{"d":"M2 10V8"}],["path",{"d":"M2 4a2 2 0 0 1 2-2"}],["path",{"d":"M20 8a2 2 0 0 1 2 2"}],["path",{"d":"M22 14v2"}],["path",{"d":"M22 20a2 2 0 0 1-2 2"}],["path",{"d":"M4 16a2 2 0 0 1-2-2"}],["path",{"d":"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"}],["path",{"d":"M8 2h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSquaresIntersect;
