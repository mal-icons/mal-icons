import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-flip-flops",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFlipFlops {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 4c2.21 0 4 1.68 4 3.76c0 0.08 0 0.16 -0.01 0.23l-0.6 9.01c-0.11 1.68 -1.6 3 -3.39 3s-3.28 -1.31 -3.39 -3l-0.6 -9.01c-0.14 -2.07 1.54 -3.85 3.74 -3.98a4.15 4.15 0 0 1 0.25 -0.01l0 0"}],["path",{"d":"M14.5 14c1 -3.33 2.17 -5 3.5 -5c1.33 0 2.5 1.67 3.5 5"}],["path",{"d":"M18 16v1"}],["path",{"d":"M6 4c2.21 0 4 1.68 4 3.76c0 0.08 0 0.16 -0.01 0.23l-0.6 9.01c-0.11 1.68 -1.6 3 -3.39 3s-3.28 -1.31 -3.39 -3l-0.6 -9.01c-0.14 -2.07 1.54 -3.85 3.74 -3.98c0.08 0 0.17 -0.01 0.25 -0.01"}],["path",{"d":"M2.5 14c1 -3.33 2.17 -5 3.5 -5c1.33 0 2.5 1.67 3.5 5"}],["path",{"d":"M6 16v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFlipFlops;
