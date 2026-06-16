import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-back-hand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBackHand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 16c0 4.42-3.58 8-8 8-3.26 0-6.19-1.99-7.4-5.02l-3.03-7.61a1 1 0 0 1 1.24-1.32l0.790.26c0.560.18 1.020.61 1.24 1.16l1.28 3.21c0.080.20.260.320.460.32H8V3.25a1.25 1.25 0 0 1 2.5 0v8.25c0 0.280.220.50.50.5s0.5-0.220.5-0.5V1.25a1.25 1.25 0 0 1 2.5 0V11.5c0 0.280.220.50.50.5s0.5-0.220.5-0.5V2.75a1.25 1.25 0 0 1 2.5 0v8.75c0 0.280.220.50.50.5s0.5-0.220.5-0.5V5.75a1.25 1.25 0 0 1 2.5 0V16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBackHand;
