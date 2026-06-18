import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rubyonrails",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRubyonrails {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.74 19.36h8.36s-1.6-7.29 3.69-10.24l0.13-0.07c1.29-0.64 4.91-2.43 10.7 1.850.19-0.160.37-0.290.37-0.29s-5.5-5.49-11.63-4.88c-3.080.28-6.87 3.08-9.09 6.78C1.06 16.230.74 19.360.74 19.36Zm8.8-0.78a10.68 10.68 0 0 1-0.13-1.33l1.140.41c0.060.50.160.960.25 1.38l-1.27-0.45Zm-7.8-4.32L0.53 13.82c-0.20.46-0.420.98-0.53 1.27l1.220.44c0.14-0.360.36-0.880.53-1.27Zm7.830.30.860.68c0.04-0.410.12-0.820.22-1.24l-0.76-0.6c-0.140.39-0.230.78-0.32 1.16Zm2.04-2.65-0.51-0.76c0.19-0.240.41-0.490.66-0.71l0.480.72a5.96 5.96 0 0 0-0.620.75ZM4.19 8.88l0.750.66c-0.250.27-0.50.55-0.720.84l-0.81-0.7c0.24-0.260.51-0.530.78-0.79Zm9.8 1.03-0.24-0.73c0.27-0.120.57-0.230.93-0.34l0.230.7a6.82 6.82 0 0 0-0.920.37Zm3.12-0.660.04-0.67c0.340.020.690.06 1.050.14l-0.040.66a5.86 5.86 0 0 0-1.05-0.13ZM8.94 6.39l-0.48-0.73c-0.260.14-0.540.29-0.830.46l0.490.74c0.28-0.170.54-0.330.82-0.46Zm9.22-0.050.04-0.71c-0.09-0.05-0.36-0.18-1.03-0.37l-0.040.7c0.350.120.690.24 1.030.38ZM13.24 5.28h0.11l-0.21-0.64c-0.33 0-0.670.02-1.020.06l0.20.63a8.87 8.87 0 0 1 0.92-0.04Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRubyonrails;
