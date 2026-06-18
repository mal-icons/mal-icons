import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-lasso-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLassoOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.03 13.25c-0.66 -0.97 -1.03 -2.08 -1.03 -3.25c0 -1.8 0.88 -3.45 2.32 -4.69m2.49 -1.51a11.07 11.07 0 0 1 4.19 -0.8c4.97 0 9 3.13 9 7c0 1.8 -0.87 3.44 -2.31 4.68m-2.5 1.52a11.07 11.07 0 0 1 -4.19 0.8c-1.91 0 -3.69 -0.46 -5.14 -1.25"}],["path",{"d":"M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 17c0 1.42 0.32 2.81 1 4"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLassoOff;
