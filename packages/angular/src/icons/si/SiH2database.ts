import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-h2database",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiH2database {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.17 13.27c0.14-0.010.28-0.020.42-0.020.7 0 1.230.16 1.60.470.370.310.560.760.56 1.33a2.86 2.86 0 0 1-0.43 1.46c-0.290.49-0.77 1.07-1.46 1.73-0.450.45-1.060.98-1.82 1.59a48.02 48.02 0 0 1-2.27 1.74v2.08h9.9V21.24H17.99c0.22-0.160.59-0.43 1.11-0.830.52-0.4 1.03-0.83 1.55-1.310.82-0.76 1.43-1.5 1.82-2.21a4.62 4.62 0 0 0 0.6-2.27c0-1.21-0.42-2.15-1.25-2.81-0.83-0.66-2.03-0.99-3.61-0.99-0.34 0-0.690.02-1.040.05V6.04H13.86v4.7H8.97V6.04H5.65v12.85h3.32v-5.66h4.89v5.66h0.04c0.31-0.240.62-0.490.93-0.74a28.56 28.56 0 0 0 1.83-1.59 14.85 14.85 0 0 0 0.52-0.53zM12.01 23.3A11.33 11.33 0 0 1 0.7 11.99 11.31 11.31 0 0 1 12.010.7a11.29 11.29 0 0 1 11.29 11.29v0.35H24v-0.35A11.99 11.99 0 0 0 12.01 0 12.01 12.01 0 0 0 0 11.99 12.03 12.03 0 0 0 12.01 24h0.35v-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiH2database;
