import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-function-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFunctionOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 15.5v0.25c0 0.69 0.56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.37 -1.24l0.38 -3.76m0.36 -3.63l0.01 -0.13a1.38 1.38 0 0 1 1.37 -1.24c0.69 0 1.25 0.56 1.25 1.25v0.25"}],["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.59 3.41a2 2 0 0 1 -1.41 0.59h-12a2 2 0 0 1 -2 -2v-12c0 -0.55 0.22 -1.04 0.58 -1.4"}],["path",{"d":"M9 12h3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFunctionOff;
