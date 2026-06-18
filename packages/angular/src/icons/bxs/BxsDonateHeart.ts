import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-donate-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsDonateHeart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.73 13.02 14 16H9v-1h4.07a0.50.5 0 0 0 0.42-0.78l-0.89-1.33A2 2 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.64a3 3 0 0 0 2.26-1.02L22 13l-1.45-0.48a3 3 0 0 0-2.820.5zm1.53-5.63c0.45-0.460.73-1.110.73-1.82s-0.28-1.35-0.73-1.82A2.45 2.45 0 0 0 17.49 3S16.25 3 15 4.29C13.75 3 12.51 3 12.51 3a2.45 2.45 0 0 0-1.760.75c-0.450.47-0.73 1.11-0.73 1.82s0.28 1.350.73 1.82L15 12l4.26-4.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsDonateHeart;
