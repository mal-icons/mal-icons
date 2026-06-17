import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-blockquote-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBlockquoteRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 3a0.50.5 0 0 0 0 1h11a0.50.5 0 0 0 0-1zm0 3a0.50.5 0 0 0 0 1h6a0.50.5 0 0 0 0-1zm0 3a0.50.5 0 0 0 0 1h6a0.50.5 0 0 0 0-1zm0 3a0.50.5 0 0 0 0 1h11a0.50.5 0 0 0 0-1zm10.11-5.37a7 7 0 0 0-0.44-0.28l0.21-0.35q0.180.110.450.290.270.180.510.430.230.250.40.560.160.310.160.69 0 0.54-0.220.87-0.220.33-0.720.33-0.32 0-0.5-0.21a0.70.7 0 0 1-0.19-0.46q0-0.340.21-0.520.21-0.180.57-0.18h0.28a1.7 1.7 0 0 0-0.12-0.5 1.4 1.4 0 0 0-0.25-0.37 2 2 0 0 0-0.35-0.3m-2.17 0A7 7 0 0 0 10 6.35L10.21 6q0.180.110.450.290.270.180.510.430.230.250.40.560.160.310.160.69 0 0.54-0.220.87-0.220.33-0.720.33-0.32 0-0.5-0.21a0.70.7 0 0 1-0.19-0.46q0-0.340.21-0.520.21-0.180.57-0.18h0.28a1.8 1.8 0 0 0-0.12-0.49 1.4 1.4 0 0 0-0.26-0.37 2 2 0 0 0-0.35-0.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBlockquoteRight;
