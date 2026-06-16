import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-history-edu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdHistoryEdu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 4v1.38c-0.83-0.33-1.72-0.5-2.61-0.5-1.79 0-3.580.68-4.95 2.05l3.33 3.33h1.11v1.11c0.860.86 1.98 1.31 3.11 1.36V15H6v3c0 1.10.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-0.34c1.34 0 2.590.52 3.54 1.46l1.41 1.41-0.20.2a2.7 2.7 0 0 1-1.920.8c-0.47 0-0.93-0.12-1.33-0.34zM19 17c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2h-6v-2.59c0.57-0.23 1.1-0.57 1.56-1.03l0.2-0.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdHistoryEdu;
