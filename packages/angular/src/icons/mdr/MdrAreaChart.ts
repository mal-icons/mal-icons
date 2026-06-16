import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-area-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAreaChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8 17 3.39-4.66c0.33-0.460.98-0.55 1.42-0.2L21 18.5v0.5c0 0.55-0.45 1-1 1H4c-0.55 0-1-0.45-1-1v-5.72c0.22 0 0.440.070.620.22L8 17zm-5-6c0.44 0 0.880.15 1.250.44l3.37 2.69 2.77-3.81c0.66-0.91 1.95-1.1 2.85-0.4L21 15.97V8c0-0.55-0.45-1-1-1h-3l-4.18-3.34a11 0 0 0-1.440.2L7 10 3.6 7.45c-0.18-0.13-0.39-0.2-0.6-0.2V11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAreaChart;
