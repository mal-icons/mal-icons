import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-flight-land",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFlightLand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.5 19h-17c-0.55 0-1 0.45-1 1s0.45 1 1 1h17c0.55 0 1-0.45 1-1s-0.45-1-1-1zM3.51 11.61l15.83 4.24c0.80.21 1.62-0.26 1.84-1.060.21-0.8-0.26-1.62-1.06-1.84l-5.31-1.42-2.58-8.45a1.08 1.08 0 0 0-0.75-0.73c-0.68-0.18-1.350.33-1.35 1.04v6.88L5.15 8.95 4.4 7.09a0.990.99 0 0 0-0.67-0.59l-0.33-0.09a0.50.5 0 0 0-0.630.48v3.75c0 0.460.30.850.740.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFlightLand;
