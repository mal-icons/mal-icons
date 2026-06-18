import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-among-us",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAmongUs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.65 12.77c-1.94 0.4 -4.47 0.32 -6.23 -0.6c-2.45 -1.26 -1.54 -4.66 1.42 -4.98c2.25 -0.22 3.81 -0.35 5.65 0.21c0.84 0.26 1.93 0.57 1.36 3.28c-0.19 1.07 -1.07 1.9 -2.19 2.09"}],["path",{"d":"M5.84 7.13c0.08 -0.56 0.21 -1.12 0.39 -1.66c0.46 -0.94 1.1 -2.07 3.99 -2.46a22.46 22.46 0 0 1 2.87 0.08c1.78 0.14 2.64 1.23 3.29 3.37c0.34 1.16 0.46 2.34 0.63 3.54v11l-12.7 -0.02c-0.55 -2.39 -0.26 -5.89 0.2 -8.48"}],["path",{"d":"M17 10c0.99 0.16 2.11 0.38 3.07 0.67c0.26 0.13 0.52 0.28 0.53 0.51c0.26 3.43 0.57 7.45 0.28 9.82h-3.88"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAmongUs;
