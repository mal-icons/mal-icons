import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bike-scooter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBikeScooter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 14h0.74L8.82 5.56A2.01 2.01 0 0 0 6.87 4H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h2.87l1.42 6.25h-0.01A6.01 6.01 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4zm8.75-6h-0.56l-1.35-3.69A2 2 0 0 0 14.96 3H12c-0.55 0-1 0.45-1 1s0.45 1 1 1h2.96l1.1 3H10.4l0.46 2H15c-0.430.58-0.75 1.25-0.9 2h-2.79l0.46 2h2.33c0.44 2.23 2.31 3.88 4.65 3.99 3.160.15 5.88-2.83 5.12-6.1C23.34 9.57 21.13 8 18.75 8zm0.13 8c-1.54-0.06-2.84-1.37-2.88-2.92-0.02-0.960.39-1.8 1.05-2.36l0.62 1.7c0.190.520.760.79 1.280.60.52-0.190.79-0.760.6-1.28l-0.63-1.730.01-0.01A2.97 2.97 0 0 1 22 13c0 1.72-1.38 3.06-3.12 3z"}],["path",{"d":"M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBikeScooter;
