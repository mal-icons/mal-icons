import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-monitor-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMonitorHeart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.11 12.45 14 10.24l-3.11 6.21c-0.170.34-0.510.55-0.890.55s-0.72-0.21-0.89-0.55L7.38 13H2v2h2v3h16v-3h2v-2h-6c-0.38 0-0.72-0.21-0.89-0.55z","opacity":".3"}],["path",{"d":"M20 6H4v3H2v2h6c0.38 0 0.720.210.890.55L10 13.76l3.11-6.21c0.34-0.68 1.45-0.68 1.79 0L16.62 11H22V9h-2V6z","opacity":".3"}],["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v3h2V6h16v3h2V6c0-1.1-0.9-2-2-2zm0 14H4v-3H2v3c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-3h-2v3z"}],["path",{"d":"M14.89 7.55c-0.34-0.68-1.45-0.68-1.79 0L10 13.76l-1.11-2.21A0.990.99 0 0 0 8 11H2v2h5.38l1.72 3.45c0.180.340.520.550.90.55s0.72-0.210.89-0.55L14 10.24l1.11 2.21c0.170.340.510.550.890.55h6v-2h-5.38l-1.73-3.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMonitorHeart;
