import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-shower-head",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuShowerHead {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m4 4 2.5 2.5"}],["path",{"d":"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{"d":"M15 5 5 15"}],["path",{"d":"M14 17v0.01"}],["path",{"d":"M10 16v0.01"}],["path",{"d":"M13 13v0.01"}],["path",{"d":"M16 10v0.01"}],["path",{"d":"M11 20v0.01"}],["path",{"d":"M17 14v0.01"}],["path",{"d":"M20 11v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuShowerHead;
