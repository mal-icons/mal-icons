import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-map-pinned",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMapPinned {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 8c0 3.61-3.87 7.43-5.39 8.8a1 1 0 0 1-1.21 0C9.87 15.43 6 11.61 6 8a6 6 0 0 1 12 0"}],["circle",{"cx":"12","cy":"8","r":"2"}],["path",{"d":"M8.71 14h-3.71a1 1 0 0 0-0.950.68l-2 6A1 1 0 0 0 3 22h18a1 1 0 0 0 0.95-1.32l-2-6a1 1 0 0 0-0.95-0.68h-3.71"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMapPinned;
