import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-touch-app",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfTouchApp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-0.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.560.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-0.17-0.07-0.35-0.11-0.54-0.11H13v-6c0-0.83-0.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-0.76-3.54-0.75-3.67-0.75-0.31 0-0.590.13-0.790.33l-0.790.8 4.94 4.94c0.270.270.650.44 1.060.44h6.79c0.75 0 1.33-0.55 1.44-1.28l0.75-5.27c0.01-0.070.02-0.140.02-0.2 0-0.62-0.38-1.16-0.91-1.38z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfTouchApp;
