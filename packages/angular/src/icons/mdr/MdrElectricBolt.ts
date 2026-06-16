import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-electric-bolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrElectricBolt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.69 2.21 4.33 11.49c-0.640.58-0.28 1.650.58 1.73L13 14l-4.85 6.76c-0.220.31-0.190.740.08 1.010.30.30.770.31 1.080.02l10.36-9.28c0.64-0.580.28-1.65-0.58-1.73L11 10l4.85-6.76c0.22-0.310.19-0.74-0.08-1.01a0.770.77 0 0 0-1.08-0.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrElectricBolt;
