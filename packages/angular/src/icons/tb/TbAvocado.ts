import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-avocado",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAvocado {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.8 14.04a3.91 3.91 0 0 1 1.34 -2.08c1.2 -0.98 1.82 -2.28 1.86 -3.9c-0.05 -1.43 -0.54 -2.63 -1.48 -3.59c-0.96 -0.94 -2.16 -1.43 -3.58 -1.48c-1.62 0.05 -2.92 0.67 -3.9 1.86c-0.56 0.68 -1.25 1.13 -2.07 1.34c-0.94 0.19 -1.83 0.48 -2.67 0.88c-0.84 0.4 -1.56 0.88 -2.14 1.44c-1.43 1.5 -2.14 3.22 -2.14 5.17c0 1.95 0.72 3.67 2.15 5.17c1.5 1.43 3.22 2.14 5.17 2.14c1.95 0 3.67 -0.71 5.17 -2.14c0.56 -0.58 1.06 -1.3 1.48 -2.14c0.4 -0.84 0.68 -1.72 0.84 -2.64v-0.04l0 0"}],["path",{"d":"M10.87 10.04c-0.94 0.11 -1.79 0.54 -2.56 1.28c-0.74 0.76 -1.17 1.61 -1.28 2.56c-0.13 0.92 0.11 1.7 0.74 2.35c0.65 0.63 1.44 0.88 2.35 0.74c0.94 -0.11 1.79 -0.54 2.56 -1.28c0.74 -0.76 1.17 -1.61 1.28 -2.56c0.14 -0.92 -0.11 -1.7 -0.74 -2.35c-0.65 -0.63 -1.43 -0.87 -2.35 -0.74"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAvocado;
