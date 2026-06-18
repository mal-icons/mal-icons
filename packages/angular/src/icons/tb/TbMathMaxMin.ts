import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-math-max-min",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMathMaxMin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 14s0.61 -5.44 2.28 -7.86m3.4 0.03c2.14 2.65 4.55 9.11 6.68 11.72"}],["path",{"d":"M18.75 18.04c0.7 -0.88 1.45 -3.56 2.25 -8.04"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMathMaxMin;
