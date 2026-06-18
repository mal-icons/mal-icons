import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-showpad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiShowpad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 11.99c0-0.09 0-0.18-0.01-0.28v-0.04c0-0.08-0.01-0.15-0.01-0.24v-0.01c-0.27-2.58-2.31-4.61-4.88-4.88h-0.01c-0.08-0.01-0.15-0.01-0.24-0.01h-0.04c-0.09 0-0.18-0.01-0.28-0.01-1.46 0-2.850.57-3.87 1.61l-1.86 1.85 1.35 1.35 1.34-1.35h-0.01l0.51-0.51c0.66-0.68 1.58-1.05 2.53-1.05h0.2c0.05 0 0.1 0 0.150.01h0.01c1.690.18 3.01 1.51 3.18 3.18v0.01c0 0.050.010.10.010.15v0.41c0 0.05-0.010.1-0.010.15-0.13 1.23-0.88 2.3-1.98 2.83l-0.040.01a0.380.38 0 0 0-0.10.05l-0.080.03-0.060.03-0.110.04-0.030.01c-1.290.45-2.720.11-3.69-0.86l-0.5-0.5-3.37-3.36-5.36-5.36-1.35 1.35L0 12l1.35 1.35 5.39 5.39 1.35-1.35 3.37-3.37-1.35-1.35-3.37 3.37L2.69 12l4.05-4.05 2.02 2.03 5.39 5.390.50.5c1.02 1.03 2.43 1.61 3.88 1.60.61 0 1.21-0.1 1.79-0.29l0.05-0.01c0.05-0.030.11-0.040.17-0.06l0.1-0.040.1-0.050.15-0.080.05-0.03c1.7-0.83 2.85-2.48 3.05-4.350.01-0.080.01-0.170.01-0.24v-0.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiShowpad;
