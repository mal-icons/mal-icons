import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-query-stats",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrQueryStats {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.88 18.47c0.48-0.770.75-1.670.69-2.66-0.13-2.15-1.84-3.97-3.97-4.2a4.5 4.5 0 0 0-5.02 4.47c0 2.49 2.01 4.5 4.49 4.50.88 0 1.7-0.26 2.39-0.7l2.41 2.41c0.390.39 1.030.39 1.42 0 0.39-0.390.39-1.03 0-1.42l-2.41-2.4zm-3.80.11a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm-0.36-8.5c-0.740.02-1.450.18-2.10.45l-0.55-0.83-3.08 5.01a1 1 0 0 1-1.610.13l-2.12-2.47-3.06 4.9c-0.310.49-0.970.62-1.440.28-0.42-0.31-0.54-0.89-0.26-1.34l3.78-6.05c0.36-0.57 1.17-0.63 1.61-0.12L9 12.5l3.18-5.17a11 0 0 1 1.68-0.03l1.86 2.78zm2.590.5c-0.64-0.28-1.33-0.45-2.05-0.49L20.8 2.9c0.31-0.490.97-0.61 1.43-0.270.430.310.540.90.26 1.34l-4.18 6.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrQueryStats;
