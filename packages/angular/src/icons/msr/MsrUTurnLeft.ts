import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-u-turn-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUTurnLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M690-120q-13 0-21.5-8.5T660-150v-456q0-75-49.5-124.5T486-780q-75 0-124.5 49.5T312-606v214l69-69q9-9 21-9t21 9q9 9 9 21t-9 21L303-299q-5 5-10 7t-11 2q-6 0-11-2t-10-7L141-419q-9-9-9-21t9-21q9-9 21-9t21 9l69 69v-214q0-100 67-167t167-67q100 0 167 67t67 167v456q0 13-8.5 21.5T690-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUTurnLeft;
