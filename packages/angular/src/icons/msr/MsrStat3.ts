import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-stat-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStat3 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-305 303-128q-9 9-21 9t-21-9q-9-9-9-21t9-21l177-177q17-17 42-17t42 17l177 177q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-305Zm0-246L303-374q-9 9-21 9t-21-9q-9-9-9-21t9-21l177-177q17-17 42-17t42 17l177 177q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-551Zm0-246L303-620q-9 9-21 9t-21-9q-9-9-9-21t9-21l177-177q17-17 42-17t42 17l198 198-42 42-198-198Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStat3;
