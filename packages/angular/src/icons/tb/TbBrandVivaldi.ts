import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-vivaldi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandVivaldi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.65 6.81c-2.47 4.28 -4.94 8.56 -7.41 12.84c-0.4 0.78 -1.37 1.3 -2.24 1.36c-0.96 0.1 -1.7 -0.4 -2.15 -1.25c-1.56 -2.68 -3.11 -5.37 -4.66 -8.06c-0.94 -1.63 -1.89 -3.27 -2.83 -4.9a2.47 2.47 0 0 1 -0.06 -2.45a2.49 2.49 0 0 1 2.09 -1.31c0.95 -0.06 1.85 0.44 2.29 1.28c0.7 1.19 2.04 3.83 2.55 4.68a3.92 3.92 0 0 0 3.28 2.02c2.13 0.13 3.97 -0.95 4.21 -3.06c0 -0.16 0.23 -3.18 0.85 -3.96c0.62 -0.78 1.64 -1.15 2.61 -0.89a2.48 2.48 0 0 1 1.81 2.06c0.08 0.58 -0.04 1.17 -0.34 1.67"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandVivaldi;
