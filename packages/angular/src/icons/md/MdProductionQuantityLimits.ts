import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-production-quantity-limits",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdProductionQuantityLimits {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.990.9-1.99 2S5.9 22 7 22s2-0.9 2-2-0.9-2-2-2zm10 0c-1.1 0-1.990.9-1.99 2s0.89 2 1.99 2 2-0.9 2-2-0.9-2-2-2zm-8.9-5h7.45c0.75 0 1.41-0.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdProductionQuantityLimits;
