import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-pulse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPulse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.97 4.76a11 0 0 0-1.92-0.07l-3.19 9.55-2.95-6.64a1 1 0 0 0-1.840.03L5.32 12H2v2h3.32c0.82 0 1.55-0.49 1.86-1.26l0.87-2.17 3.04 6.84c0.160.360.520.590.920.59l0.050a11 0 0 0 0.9-0.68l2.91-8.740.98 3.91A2 2 0 0 0 18.78 14H22v-2h-3.22l-1.81-7.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPulse;
