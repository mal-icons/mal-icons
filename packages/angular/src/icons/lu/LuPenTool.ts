import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-pen-tool",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPenTool {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.71 21.29a1 1 0 0 1-1.41 0l-1.59-1.59a1 1 0 0 1 0-1.41l5.59-5.59a1 1 0 0 1 1.41 0l1.59 1.59a1 1 0 0 1 0 1.41z"}],["path",{"d":"m18 13-1.37-6.87a1 1 0 0 0-0.75-0.78L3.24 2.03a1 1 0 0 0-1.21 1.21L5.35 15.88a1 1 0 0 0 0.780.75L13 18"}],["path",{"d":"m2.3 2.3 7.29 7.29"}],["circle",{"cx":"11","cy":"11","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPenTool;
