import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-elastic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandElastic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2a5 5 0 0 1 5 5c0 0.71 -0.23 1.39 -0.5 2c1.89 0.04 3.5 1.6 3.5 3.5c0 1.87 -1.66 3.4 -3.5 3.5c0.33 0.63 0.5 1.13 0.5 1.5a2.5 2.5 0 0 1 -2.5 2.5c-0.79 0 -1.54 -0.43 -2 -1c-0.79 1.73 -2.48 3 -4.5 3a5 5 0 0 1 -4.58 -7a3.5 3.5 0 0 1 -0.11 -6.99l0.2 0a2.5 2.5 0 0 1 2 -4c0.79 0 1.54 0.43 2 1c0.79 -1.73 2.48 -3 4.5 -3l0 -0.01"}],["path",{"d":"M8.5 9l-3 -1"}],["path",{"d":"M9.5 5l-1 4l1 2l5 2l4 -4"}],["path",{"d":"M18.5 16l-3 -0.5l-1 -2.5"}],["path",{"d":"M14.5 19l1 -3.5"}],["path",{"d":"M5.42 15l4.08 -4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandElastic;
