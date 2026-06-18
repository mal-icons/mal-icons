import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-pentagon-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPentagonOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.13 4.13l2.7 -1.96a1.98 1.98 0 0 1 2.33 0l8.02 5.83c0.69 0.5 0.98 1.4 0.72 2.21l-1.89 5.81m-0.98 3.02l-0.2 0.6a1.98 1.98 0 0 1 -1.88 1.37h-9.92a1.98 1.98 0 0 1 -1.88 -1.37l-3.06 -9.43a1.98 1.98 0 0 1 0.72 -2.21l2.99 -2.18"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPentagonOff;
