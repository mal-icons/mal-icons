import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-arrows-outward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArrowsOutward {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m195-449 106 106q9 9 9 21t-9 21q-9 9-21 9t-21-9L102-459q-9-9-9-21t9-21l157-157q9-9 21.5-9.5T302-659q9 9 9 21.5t-9 21.5L196-510h214q13 0 21.5 8.5T440-480q0 13-8.5 21.5T410-450l-215 1Zm569-1H550q-13 0-21.5-8.5T520-480q0-13 8.5-21.5T550-510h214L658-616q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l157 157q9 9 9 21t-9 21L700-301q-9 9-21 8.5t-21-9.5q-9-9-9-21t9-21l106-106Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArrowsOutward;
