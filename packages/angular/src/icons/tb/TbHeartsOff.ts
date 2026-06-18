import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-hearts-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHeartsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.02 18l-2.02 2l-7.5 -7.43a5 5 0 0 1 0.49 -7.59m3.01 -1a5 5 0 0 1 4 2.02a5 5 0 0 1 8.15 5.78"}],["path",{"d":"M11.81 11.81a2.81 2.81 0 0 0 -0.01 3.95l4.18 4.24l2.01 -2.02m1.98 -1.99l0.21 -0.21a2.81 2.81 0 0 0 0 -3.95a2.75 2.75 0 0 0 -3.91 -0.01l-0.28 0.18"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHeartsOff;
