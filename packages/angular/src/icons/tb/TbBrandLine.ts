import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 10.66c0 -4.22 -4.04 -7.66 -9 -7.66s-9 3.44 -9 7.66c0 3.78 3.2 6.96 7.53 7.56c1.05 0.24 0.93 0.64 0.7 2.13c-0.04 0.24 -0.18 0.93 0.78 0.51c0.96 -0.42 5.18 -3.2 7.07 -5.48c1.3 -1.5 1.93 -3.03 1.93 -4.71v-0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandLine;
