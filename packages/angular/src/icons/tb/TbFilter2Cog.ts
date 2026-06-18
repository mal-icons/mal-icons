import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-filter-2-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFilter2Cog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h3"}],["path",{"d":"M19 21c-0.53 0 -1.04 -0.21 -1.41 -0.59c-0.37 -0.37 -0.59 -0.88 -0.59 -1.41c0 -0.53 0.21 -1.04 0.59 -1.41c0.38 -0.37 0.88 -0.59 1.41 -0.59m0 4c0.53 0 1.04 -0.21 1.41 -0.59c0.38 -0.37 0.59 -0.88 0.59 -1.41c0 -0.53 -0.21 -1.04 -0.59 -1.41c-0.37 -0.37 -0.88 -0.59 -1.41 -0.59m0 4v1.5m0 -5.5v-1.5m3.03 1.75l-1.3 0.75m-3.46 2l-1.3 0.75m0 -3.5l1.3 0.75m3.46 2l1.3 0.75"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFilter2Cog;
