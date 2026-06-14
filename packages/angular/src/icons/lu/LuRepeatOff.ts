import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-repeat-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuRepeatOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.66 6H21l-4-4"}],["path",{"d":"M17.9 17.9A4 4 0 0 1 17 18H3l4-4"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M21 13v1a4 4 0 0 1-0.17 1.16"}],["path",{"d":"m21 6-4 4"}],["path",{"d":"M3 11v-1a4 4 0 0 1 3.1-3.9"}],["path",{"d":"m7 22-4-4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuRepeatOff;
