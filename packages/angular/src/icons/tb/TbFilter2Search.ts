import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-filter-2-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFilter2Search {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h8.5"}],["path",{"d":"M9 18h2"}],["path",{"d":"M15 18c0 0.8 0.32 1.56 0.88 2.12c0.56 0.56 1.33 0.88 2.12 0.88c0.8 0 1.56 -0.32 2.12 -0.88c0.56 -0.56 0.88 -1.33 0.88 -2.12c0 -0.8 -0.32 -1.56 -0.88 -2.12c-0.56 -0.56 -1.33 -0.88 -2.12 -0.88c-0.8 0 -1.56 0.32 -2.12 0.88c-0.56 0.56 -0.88 1.33 -0.88 2.12"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFilter2Search;
