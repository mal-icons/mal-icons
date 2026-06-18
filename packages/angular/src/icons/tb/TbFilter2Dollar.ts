import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-filter-2-dollar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFilter2Dollar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h10"}],["path",{"d":"M9 18h4"}],["path",{"d":"M21 15h-2m-2 6h2m0 0v1m0 -1h0.5c0.4 0 0.78 -0.16 1.06 -0.44c0.28 -0.28 0.44 -0.66 0.44 -1.06c0 -0.4 -0.16 -0.78 -0.44 -1.06c-0.28 -0.28 -0.66 -0.44 -1.06 -0.44h-1c-0.4 0 -0.78 -0.16 -1.06 -0.44c-0.28 -0.28 -0.44 -0.66 -0.44 -1.06c0 -0.4 0.16 -0.78 0.44 -1.06c0.28 -0.28 0.66 -0.44 1.06 -0.44h0.5m0 -1v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFilter2Dollar;
