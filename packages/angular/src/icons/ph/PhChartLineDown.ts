import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-chart-line-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhChartLineDown {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V60.69l56,56,26.34-26.35a8,8,0,0,1,11.32,0L192,148.69V128a8,8,0,0,1,16,0v40a7,7,0,0,1,0,0.8c0,0.11,0,0.21-0.050.32s0,0.3-0.070.46a2.83,2.83,0,0,1-0.090.37c0,0.13-0.060.26-0.10.39s-0.080.23-0.120.35l-0.140.39-0.150.31c-0.060.13-0.120.27-0.190.4s-0.110.18-0.160.28l-0.240.39-0.210.28-0.260.35c-0.110.14-0.240.27-0.360.4l-0.160.18-0.170.15a4.83,4.83,0,0,1-0.420.37,3.92,3.92,0,0,1-0.320.25l-0.30.22-0.380.23a2.91,2.91,0,0,1-0.30.17l-0.370.19-0.340.15-0.360.13a2.84,2.84,0,0,1-0.380.13l-0.360.1c-0.14,0-0.260.07-0.40.09l-0.420.07-0.350.05a7,7,0,0,1-0.79,0H160a8,8,0,0,1,0-16h20.69L128,107.31l-26.34,26.35a8,8,0,0,1-11.32,0L40,83.31V200H224A8,8,0,0,1,232,208Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhChartLineDown;
