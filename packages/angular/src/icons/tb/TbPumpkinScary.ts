import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-pumpkin-scary",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPumpkinScary {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 15l1.5 1l1.5 -1l1.5 1l1.5 -1"}],["path",{"d":"M10 11h0.01"}],["path",{"d":"M14 11h0.01"}],["path",{"d":"M17 6.08c2.61 0.59 3.63 4.16 2.72 7.98c-0.9 3.82 -2.75 6.44 -5.36 5.85a3.36 3.36 0 0 1 -0.77 -0.28a3.73 3.73 0 0 1 -1.59 0.36c-0.56 0 -1.09 -0.13 -1.59 -0.36a3.3 3.3 0 0 1 -0.77 0.28c-2.61 0.59 -4.46 -2.03 -5.36 -5.85c-0.9 -3.82 0.12 -7.39 2.72 -7.98c1.09 -0.24 1.58 0.07 2.59 0.79c0.72 -0.55 1.54 -0.87 2.42 -0.87c0.88 0 1.7 0.32 2.42 0.87c1.01 -0.72 1.5 -1.03 2.59 -0.79"}],["path",{"d":"M12 6c0 -1.23 0.69 -2.35 1.79 -2.89l0.21 -0.11"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPumpkinScary;
