import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-rosette-discount-check-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRosetteDiscountCheckOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 12l2 2l1.5 -1.5m2 -2l0.5 -0.5"}],["path",{"d":"M8.89 4.89a2.2 2.2 0 0 0 0.86 -0.53l0.7 -0.7a2.2 2.2 0 0 1 3.12 0l0.7 0.7c0.41 0.41 0.97 0.64 1.55 0.64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 0.58 0.23 1.14 0.64 1.55l0.7 0.7a2.2 2.2 0 0 1 0 3.12l-0.7 0.7a2.2 2.2 0 0 0 -0.53 0.86m-0.76 3.25a2.19 2.19 0 0 1 -1.55 0.64h-1a2.2 2.2 0 0 0 -1.55 0.64l-0.7 0.7a2.2 2.2 0 0 1 -3.12 0l-0.7 -0.7a2.2 2.2 0 0 0 -1.55 -0.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -0.64 -1.55l-0.7 -0.7a2.2 2.2 0 0 1 0 -3.12l0.7 -0.7a2.2 2.2 0 0 0 0.64 -1.55v-1c0 -0.6 0.24 -1.15 0.64 -1.55"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRosetteDiscountCheckOff;
