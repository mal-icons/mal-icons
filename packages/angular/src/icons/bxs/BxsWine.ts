import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-wine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsWine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 17.92V20H9v2h6v-2h-2v-2.08c3.16-0.4 5.85-2.66 6.71-5.790.26-0.950.31-2.030.14-3.21l-0.87-6.06A1 1 0 0 0 18 2H6a1 1 0 0 0-0.990.86l-0.86 6.06c-0.17 1.18-0.12 2.260.14 3.210.86 3.13 3.55 5.39 6.71 5.79zM17.13 4l0.57 4H6.3l0.57-4h10.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsWine;
