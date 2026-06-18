import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-threema",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiThreema {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 20.49a1.76 1.76 0 1 1 0 3.51 1.76 1.76 0 0 1 0-3.51zm-6.33 0a1.76 1.76 0 1 1 0 3.51 1.76 1.76 0 0 1 0-3.51zm12.67 0a1.76 1.76 0 1 1 0 3.51 1.76 1.76 0 0 1 0-3.51zM12 0c5.7 0 10.32 4.07 10.32 9.08 0 5.02-4.62 9.08-10.32 9.08a11.45 11.45 0 0 1-4.52-0.92l-5.17 1.29 1.11-4.42c-1.09-1.44-1.73-3.17-1.73-5.04C1.68 4.07 6.3 0 12 0zm0 4.24A2.93 2.93 0 0 0 9.07 7.16v1.17h-0.11a0.470.47 0 0 0-0.470.47v4.13c0 0.260.210.470.470.47h6.09c0.26 0 0.47-0.210.47-0.47V8.8a0.470.47 0 0 0-0.47-0.47h-0.11v-1.17a2.93 2.93 0 0 0-2.93-2.92zm0 1.17c0.97 0 1.760.79 1.76 1.75v1.17h-3.51v-1.17c0-0.970.79-1.75 1.76-1.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiThreema;
