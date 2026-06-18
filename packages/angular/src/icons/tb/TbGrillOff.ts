import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-grill-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGrillOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 8h-3a6 6 0 0 0 6 6h2c0.32 0 0.62 -0.02 0.93 -0.07m2.79 -1.21a5.99 5.99 0 0 0 2.28 -4.49l0 -0.22h-7"}],["path",{"d":"M18.83 18.82a2 2 0 1 1 -2.66 -2.63"}],["path",{"d":"M9 14l-3 6"}],["path",{"d":"M15 18h-8"}],["path",{"d":"M15 5v-1"}],["path",{"d":"M12 5v-1"}],["path",{"d":"M9 5v-1"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGrillOff;
