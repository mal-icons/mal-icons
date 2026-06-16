import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-filter-8",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsFilter8 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-8-2h2a2 2 0 0 0 2-2v-1.5c0-0.83-0.67-1.5-1.5-1.50.83 0 1.5-0.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 0.830.67 1.5 1.5 1.5-0.83 0-1.50.67-1.5 1.5V13a2 2 0 0 0 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsFilter8;
