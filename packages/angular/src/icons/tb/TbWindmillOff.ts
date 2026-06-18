import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-windmill-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWindmillOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.06 11.06c1.18 -0.82 1.94 -2.11 1.94 -3.56c0 -2.49 -2.24 -4.5 -5 -4.5v5"}],["path",{"d":"M12 12c0 2.76 2.01 5 4.5 5c0.17 0 0.33 -0.01 0.49 -0.03m2.62 -1.36c0.86 -0.91 1.39 -2.19 1.39 -3.61h-5"}],["path",{"d":"M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9"}],["path",{"d":"M6.98 7.03c-2.24 0.28 -3.98 2.4 -3.98 4.97h9"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWindmillOff;
