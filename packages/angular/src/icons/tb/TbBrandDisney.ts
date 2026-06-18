import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-disney",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDisney {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.22 5.84c-1.31 -0.15 -1.22 -0.58 -1.22 -0.79c0 -0.22 0.42 -1.04 4.34 -1.04c4.69 0 14.66 3.65 14.66 10.04s-8.71 4.93 -10.43 4.52c-1.72 -0.41 -5.56 -2.26 -5.56 -4.17c0 -1.39 3.08 -2.39 6.72 -2.39c3.63 0 5.29 1.04 5.29 2c0 0.5 -0.07 1.23 -1 1.5"}],["path",{"d":"M10.02 8a505.15 505.15 0 0 0 0 13"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDisney;
