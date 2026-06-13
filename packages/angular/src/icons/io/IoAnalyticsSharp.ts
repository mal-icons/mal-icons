import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-analytics-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoAnalyticsSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450,128a46,46,0,0,0-44.11,59l-71.37,71.36a45.88,45.88,0,0,0-29,0l-52.91-52.91a46,46,0,1,0-89.12,0L75,293.88A46.08,46.08,0,1,0,106.11,325l87.37-87.36a45.85,45.85,0,0,0,29,0l52.92,52.92a46,46,0,1,0,89.12,0L437,218.12A46,46,0,1,0,450,128Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoAnalyticsSharp;
