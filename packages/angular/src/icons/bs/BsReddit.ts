import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-reddit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsReddit {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.17 8a0.830.83 0 0 0-0.830.83c0 0.460.370.840.830.83a0.830.83 0 0 0 0-1.66m1.84 3.65c0.32 0 1.4-0.04 1.98-0.61a0.230.23 0 0 0 0-0.310.210.21 0 0 0-0.31 0c-0.350.36-1.130.49-1.670.49-0.55 0-1.31-0.12-1.67-0.49a0.210.21 0 0 0-0.31 0 0.210.21 0 0 0 0 0.31c0.560.56 1.650.61 1.980.61zm0.99-2.81c0 0.460.370.830.830.83s0.83-0.380.83-0.83a0.830.83 0 0 0-1.66 0z"}],["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.83-1.16c-0.31 0-0.60.12-0.810.33-0.8-0.57-1.9-0.94-3.12-0.99l0.53-2.5 1.740.37a0.830.83 0 1 0 0.83-0.870.830.83 0 0 0-0.740.47l-1.94-0.41a0.20.2 0 0 0-0.150.030.20.2 0 0 0-0.090.13l-0.59 2.79c-1.240.04-2.360.41-3.170.99-0.21-0.2-0.5-0.32-0.81-0.32a1.16 1.16 0 0 0-0.48 2.22q-0.030.17-0.030.35c0 1.8 2.09 3.26 4.67 3.26s4.67-1.45 4.67-3.26c0-0.11-0.01-0.24-0.03-0.350.4-0.180.69-0.590.69-1.07 0-0.65-0.52-1.16-1.16-1.16"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsReddit;
