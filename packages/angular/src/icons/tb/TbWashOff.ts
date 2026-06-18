import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-wash-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWashOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6l1.72 10.33a2 2 0 0 0 1.97 1.67h10.61c0.21 0 0.41 -0.03 0.6 -0.09m1.52 -2.47l1.57 -9.44"}],["path",{"d":"M3.49 8.97c0.17 0.02 0.34 0.03 0.51 0.04c0.79 0.01 1.54 -0.18 2 -0.5c0.46 -0.32 1.21 -0.51 2 -0.5m4.92 0.92c0.43 -0.08 0.81 -0.23 1.08 -0.42c0.46 -0.32 1.21 -0.51 2 -0.5c0.79 -0.01 1.54 0.18 2 0.5c0.46 0.32 1.21 0.51 2 0.5c0.17 0 0.34 -0.01 0.5 -0.04"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWashOff;
