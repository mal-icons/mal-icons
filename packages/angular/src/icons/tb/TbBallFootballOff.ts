import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ball-football-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBallFootballOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.04 16.05a9 9 0 0 0 -12.08 -12.09m-2.32 1.68a9 9 0 0 0 12.73 12.73"}],["path",{"d":"M12 7l4.76 3.46l-0.57 1.74l-0.98 3.01l-0.21 0.79h-6l-1.75 -5.54l1.86 -1.35l2.31 -1.68l0.58 -0.42"}],["path",{"d":"M12 7v-4"}],["path",{"d":"M15 16l2.5 3"}],["path",{"d":"M16.76 10.46l3.75 -1.45"}],["path",{"d":"M9.06 16.05l-2.56 2.96"}],["path",{"d":"M7.25 10.46l-3.74 -1.45"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBallFootballOff;
