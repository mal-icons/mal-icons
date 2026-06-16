import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-party-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPartyMode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.95 6-0.59-0.65L14.12 4H9.88L8.65 5.35l-0.60.65H4v12h16V6h-4.05zM7 12c0-2.76 2.24-5 5-5 1.63 0 3.060.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 0.350.070.690.18 1H7.1c-0.06-0.32-0.1-0.66-0.1-1zm10 0c0 2.76-2.24 5-5 5-1.63 0-3.06-0.79-3.98-2H12c1.66 0 3-1.34 3-3 0-0.35-0.07-0.69-0.18-1h2.08c0.070.320.10.660.1 1z","opacity":".3"}],["path",{"d":"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 14H4V6h4.05l0.59-0.65L9.88 4h4.24l1.24 1.350.590.65H20v12zM9 12c0-1.66 1.34-3 3-3h3.98c-0.92-1.21-2.35-2-3.98-2a5 5 0 0 0-4.9 6h2.08c-0.11-0.31-0.18-0.65-0.18-1zm6 0c0 1.66-1.34 3-3 3H8.02c0.92 1.21 2.35 2 3.98 2a5 5 0 0 0 4.9-6h-2.08c0.110.310.180.650.18 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPartyMode;
