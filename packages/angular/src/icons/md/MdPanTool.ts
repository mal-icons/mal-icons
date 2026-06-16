import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-pan-tool",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPanTool {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 24h-6.55c-1.08 0-2.14-0.45-2.89-1.23l-7.3-7.61 2.07-1.83c0.62-0.55 1.53-0.66 2.26-0.27L8 14.34V4.79a2.5 2.5 0 0 1 3.01-2.45C11.1 1.04 12.180.01 13.50.01c0.86 0 1.610.43 2.06 1.090.29-0.120.61-0.180.94-0.18a2.5 2.5 0 0 1 2.5 2.5v0.28a2.5 2.5 0 0 1 3 2.45V20c0 2.21-1.79 4-4 4zM4.14 15.28l5.86 6.1c0.380.390.90.62 1.440.62H18c1.1 0 2-0.9 2-2V6.15c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5V12h-2V3.42c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5V12h-2V2.51c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5V12h-2V4.79c0-0.28-0.22-0.5-0.5-0.5s-0.50.23-0.50.5v12.87l-5.35-2.83-0.510.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPanTool;
