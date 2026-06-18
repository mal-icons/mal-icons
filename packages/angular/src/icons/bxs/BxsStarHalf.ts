import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-star-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsStarHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.03 20.78A11 0 0 0 6 22a1 1 0 0 0 0.56-0.17L12 18.2l5.45 3.63a1 1 0 0 0 1.52-1.11l-1.83-6.4 4.54-4.08a1 1 0 0 0-0.59-1.74l-5.7-0.45-2.47-5.46a11 0 0 0-1.820L8.62 8.05l-5.70.45a1 1 0 0 0-0.62 1.71l4.21 4.11-1.49 6.45zM12 5.43l2.04 4.520.590.05h0l3.970.32-3.27 2.9400-0.460.420.170.6v0l1.25 4.39L12 15.8V5.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsStarHalf;
