import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-wifi-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxWifi2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.67 14.31C16.18 12.82 14.17 12 12 12s-4.180.82-5.67 2.31l1.41 1.41c1.11-1.11 2.62-1.72 4.26-1.72 1.640 3.150.61 4.26 1.72l1.41-1.41z"}],["path",{"d":"M20.44 11.29c-4.57-4.57-12.3-4.57-16.87 0l1.41 1.41c3.81-3.81 10.24-3.81 14.05 0l1.41-1.41z"}],["circle",{"cx":"12","cy":"18","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxWifi2;
