import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-webhook",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWebhook {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 16c0-1.84 1-3.45 2.48-4.320.67-0.39 1.520.08 1.520.86 0 0.36-0.190.68-0.50.86-0.90.52-1.5 1.49-1.5 2.6 0 1.85 1.68 3.31 3.6 2.94 1.42-0.28 2.4-1.61 2.4-3.06 0-0.490.39-0.880.88-0.88h5c0.27-0.310.67-0.5 1.12-0.50.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5c-0.44 0-0.84-0.19-1.12-0.5H11.9A5 5 0 0 1 2 16zm14.37-9c0.65 0 1.14-0.620.97-1.25A4.99 4.99 0 0 0 12.5 2a5 5 0 0 0-3.45 8.62l-2.35 3.9c-0.680.14-1.20.75-1.2 1.48 0 0.830.67 1.5 1.5 1.5a1.5 1.5 0 0 0 1.43-1.95l2.86-4.75c0.25-0.410.13-0.95-0.28-1.19-0.9-0.53-1.51-1.5-1.51-2.61 0-1.65 1.35-3 3-3 1.38 0 2.540.93 2.89 2.20.130.460.510.80.980.8zm0.63 6c-0.38 0-0.750.07-1.090.2-0.40.16-0.86-0.04-1.08-0.41l-2.6-4.32C11.53 8.35 11 7.74 11 7c0-0.830.67-1.5 1.5-1.5S14 6.17 14 7c0 0.15-0.020.29-0.060.43l2.19 3.65c0.28-0.050.57-0.080.87-0.08 2.76 0 5 2.24 5 5s-2.24 5-5 5c-0.86 0-1.68-0.22-2.39-0.61-0.92-0.5-0.58-1.890.47-1.890.17 0 0.340.050.490.140.420.230.910.36 1.430.36 1.65 0 3-1.35 3-3s-1.35-3-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWebhook;
