import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-hammer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHammer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15 12-9.37 9.37a1 1 0 0 1-3-3L12 9"}],["path",{"d":"m18 15 4-4"}],["path",{"d":"m21.5 11.5-1.91-1.91A2 2 0 0 1 19 8.17v-0.34a2 2 0 0 0-0.59-1.41l-1.66-1.66A6 6 0 0 0 12.52 3H9l1.24 1.24A6 6 0 0 1 12 8.49V10l2 2h1.17a2 2 0 0 1 1.410.59L18.5 14.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHammer;
