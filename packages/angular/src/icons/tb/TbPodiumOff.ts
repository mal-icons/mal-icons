import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-podium-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPodiumOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 8h7l-0.62 2.49a2 2 0 0 1 -1.94 1.52h-0.44m-4 0h-4.44a2 2 0 0 1 -1.94 -1.51l-0.62 -2.48h3"}],["path",{"d":"M7 8v-1m0.86 -3.11a2.99 2.99 0 0 1 2.14 -0.89"}],["path",{"d":"M8 12l1 9"}],["path",{"d":"M15.6 15.61l-0.6 5.39"}],["path",{"d":"M7 21h10"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPodiumOff;
