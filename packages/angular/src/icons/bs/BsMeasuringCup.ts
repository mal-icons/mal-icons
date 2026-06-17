import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-measuring-cup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMeasuringCup {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.040.31A0.50.5 0 0 1 0.5 0H14a2 2 0 0 1 2 2v5.96a1.04 1.04 0 0 1-2.070.17l-0.85-5.09A0.040.04 0 0 0 13 3.04V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.74a2.5 2.5 0 0 0-0.73-1.77L0.150.85A0.50.5 0 0 1 0.040.31M1.71 1l0.270.27A3.5 3.5 0 0 1 3 3.74V14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3.04a1.04 1.04 0 0 1 2.07-0.17l0.85 5.09A0.040.04 0 0 0 15 7.96V2a1 1 0 0 0-1-1zM4 3h3.5a0.50.5 0 1 1 0 1H4zm0 2h1.5a0.50.5 0 1 1 0 1H4zm0 2h3.5a0.50.5 0 1 1 0 1H4zm0 2h1.5a0.50.5 0 1 1 0 1H4zm0 2h3.5a0.50.5 0 0 1 0 1H4zm0 2h1.5a0.50.5 0 0 1 0 1H4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMeasuringCup;
