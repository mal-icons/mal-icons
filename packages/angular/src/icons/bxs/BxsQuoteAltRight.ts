import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-quote-alt-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsQuoteAltRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.95 8.72-0.02-0.17-0.030.01A4.5 4.5 0 1 0 17.5 14c0.22 0 0.44-0.030.65-0.06-0.070.23-0.140.47-0.250.68-0.110.31-0.290.57-0.470.84-0.150.29-0.410.49-0.60.74-0.20.24-0.470.4-0.690.6-0.210.21-0.490.32-0.710.46-0.230.13-0.430.28-0.650.35l-0.540.22-0.470.20.48 1.940.6-0.14c0.19-0.050.42-0.10.69-0.170.27-0.050.56-0.190.88-0.310.32-0.140.69-0.24 1.03-0.470.34-0.220.74-0.4 1.09-0.690.34-0.30.75-0.56 1.05-0.940.33-0.360.66-0.730.91-1.160.29-0.410.49-0.860.7-1.30.19-0.440.34-0.90.47-1.340.24-0.880.34-1.720.38-2.440.03-0.720.01-1.31-0.03-1.75a7.03 7.03 0 0 0-0.06-0.54zm-11 0-0.02-0.17-0.030.01A4.5 4.5 0 1 0 6.5 14c0.22 0 0.44-0.030.65-0.06-0.070.23-0.140.47-0.250.68-0.110.31-0.290.57-0.470.84-0.150.29-0.410.49-0.60.74-0.20.24-0.470.4-0.690.6-0.210.21-0.490.32-0.710.46-0.230.13-0.430.28-0.650.35l-0.540.22c-0.30.12-0.470.2-0.470.2l0.48 1.940.6-0.14c0.19-0.050.42-0.10.69-0.170.27-0.050.56-0.190.88-0.310.32-0.140.69-0.24 1.03-0.470.34-0.220.74-0.4 1.09-0.690.34-0.30.75-0.56 1.05-0.940.33-0.360.66-0.730.91-1.160.29-0.410.49-0.860.7-1.30.19-0.440.34-0.90.47-1.340.24-0.880.34-1.720.38-2.440.03-0.720.01-1.31-0.03-1.75a7.57 7.57 0 0 0-0.06-0.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsQuoteAltRight;
