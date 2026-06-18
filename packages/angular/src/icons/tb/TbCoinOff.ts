import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-coin-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCoinOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.8 9a2 2 0 0 0 -1.8 -1h-1m-2.82 1.17a2 2 0 0 0 1.82 2.83h1m2.82 2.82a2 2 0 0 1 -1.82 1.18h-2a2 2 0 0 1 -1.8 -1"}],["path",{"d":"M20.04 16.05a9 9 0 0 0 -12.09 -12.09m-2.32 1.68a9 9 0 1 0 12.73 12.73"}],["path",{"d":"M12 6v2m0 8v2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCoinOff;
