import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-query-stats",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtQueryStats {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.88 18.47c0.44-0.70.7-1.510.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c0.88 0 1.7-0.26 2.39-0.7L21.58 23 23 21.58l-3.12-3.11zm-3.80.11a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm-0.36-8.5c-0.740.02-1.450.18-2.10.45l-0.55-0.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.590.5c-0.64-0.28-1.33-0.45-2.05-0.49L21.38 2 23 3.18l-4.69 7.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtQueryStats;
