import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-commute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsCommute {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3zM5 14c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm15.57-4.34c-0.14-0.4-0.52-0.66-0.97-0.66h-7.19c-0.46 0-0.830.26-0.980.66l-1.42 4.11v5.51c0 0.380.310.720.690.72h0.62c0.38 0 0.68-0.380.68-0.76V18h8v1.24c0 0.380.310.760.690.76h0.61c0.38 0 0.69-0.340.69-0.72l0.01-1.37v-4.14l-1.43-4.11zm-8.160.34h7.19l1.03 3h-9.25l1.03-3zM12 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm8 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsCommute;
