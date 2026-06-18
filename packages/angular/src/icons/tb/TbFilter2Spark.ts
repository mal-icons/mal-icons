import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-filter-2-spark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFilter2Spark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h9.5"}],["path",{"d":"M9 18h2.5"}],["path",{"d":"M19 21.5c0.21 -0.85 0.64 -1.62 1.26 -2.24c0.62 -0.62 1.39 -1.05 2.24 -1.26c-0.85 -0.2 -1.62 -0.64 -2.24 -1.26c-0.62 -0.62 -1.05 -1.39 -1.26 -2.24c-0.2 0.85 -0.64 1.63 -1.26 2.24c-0.62 0.62 -1.39 1.05 -2.24 1.26c0.85 0.21 1.63 0.64 2.24 1.26c0.62 0.62 1.05 1.39 1.26 2.24"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFilter2Spark;
