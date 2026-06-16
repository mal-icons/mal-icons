import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-date-range",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDateRange {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 4h-1V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H8V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H5c-1.11 0-1.990.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 15c0 0.55-0.45 1-1 1H6c-0.55 0-1-0.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDateRange;
