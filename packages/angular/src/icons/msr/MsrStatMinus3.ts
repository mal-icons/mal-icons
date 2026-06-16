import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-stat-minus-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStatMinus3 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-167 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L522-125q-17 17-42 17t-42-17L261-302q-9-9-9-21t9-21q9-9 21-9t21 9l177 177Zm0-246 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L522-371q-17 17-42 17t-42-17L261-548q-9-9-9-21t9-21q9-9 21-9t21 9l177 177Zm0-246 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L522-617q-17 17-42 17t-42-17L261-794q-9-9-9-21t9-21q9-9 21-9t21 9l177 177Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStatMinus3;
