import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ironing-steam-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbIroningSteamOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 4h7.46a3 3 0 0 1 2.96 2.51l0.58 3.46l0.81 4.87a1 1 0 0 1 -0.82 1.15"}],["path",{"d":"M16 16h-13a7 7 0 0 1 6.06 -6.94"}],["path",{"d":"M13 9h6.8"}],["path",{"d":"M12 19v2"}],["path",{"d":"M8 19l-1 2"}],["path",{"d":"M16 19l1 2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbIroningSteamOff;
