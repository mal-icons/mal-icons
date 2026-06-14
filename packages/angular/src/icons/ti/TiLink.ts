import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-link",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiLink {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.28 6.32c-0.43-0.43-1.13-0.43-1.56 0l-1.72 1.72-0.31-0.31c-1.17-1.17-3.22-1.17-4.38 0l-4.17 4.17c-0.580.58-0.91 1.36-0.91 2.19s0.32 1.610.91 2.19l0.310.31-1.72 1.72c-0.430.43-0.43 1.13 0 1.560.220.220.50.320.780.32s0.56-0.110.78-0.32l1.72-1.720.310.31c0.580.58 1.360.91 2.190.91s1.61-0.32 2.19-0.91l4.17-4.17c0.58-0.580.91-1.360.91-2.19s-0.32-1.61-0.91-2.19l-0.31-0.31 1.72-1.72c0.43-0.430.43-1.130-1.56zm-2.97 6.41l-4.17 4.17c-0.170.17-0.40.25-0.640.25s-0.47-0.08-0.64-0.25l-0.31-0.310.72-0.72c0.43-0.430.43-1.13 0-1.56-0.21-0.21-0.5-0.32-0.78-0.32s-0.560.11-0.780.32l-0.720.72-0.31-0.31c-0.17-0.17-0.26-0.39-0.26-0.64s0.09-0.470.26-0.64l4.17-4.17c0.17-0.170.39-0.260.64-0.26s0.470.090.640.26l0.310.31-0.720.72c-0.430.43-0.43 1.13 0 1.560.220.220.50.320.780.32s0.56-0.110.78-0.32l0.72-0.720.310.31c0.170.170.260.40.260.64s-0.090.47-0.260.64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiLink;
