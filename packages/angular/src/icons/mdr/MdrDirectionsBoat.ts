import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-directions-boat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDirectionsBoat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 21c-1.19 0-2.38-0.35-3.47-0.98-0.33-0.19-0.73-0.19-1.07 0a6.83 6.83 0 0 1-6.93 0c-0.33-0.19-0.73-0.19-1.07 0-1.080.63-2.270.98-3.460.98H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h1c1.38 0 2.74-0.35 4-0.99a8.75 8.75 0 0 0 8 0c1.260.65 2.620.99 4 0.99h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1zM3.95 19H4c1.27 0 2.42-0.55 3.33-1.330.39-0.340.95-0.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-0.55 3.33-1.33c0.39-0.340.95-0.34 1.34 0 0.910.78 2.06 1.33 3.33 1.33h0.05l1.9-6.68c0.11-0.370.04-1.06-0.66-1.28L20 10.62V6c0-1.1-0.9-2-2-2h-3V2c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v2H6c-1.1 0-2 0.9-2 2v4.62l-1.290.42c-0.630.19-0.810.84-0.66 1.28L3.95 19zM6 6h12v3.97L12.62 8.2c-0.41-0.13-0.84-0.13-1.25 0L6 9.97V6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDirectionsBoat;
