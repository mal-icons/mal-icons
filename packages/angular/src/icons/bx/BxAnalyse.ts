import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-analyse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAnalyse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12h2a7.99 7.99 0 0 1 2.34-5.66 7.91 7.91 0 0 1 2.54-1.71 8.12 8.12 0 0 1 6.13-0.04A2.49 2.49 0 0 0 17.5 7C18.89 7 20 5.89 20 4.5S18.89 2 17.5 2c-0.69 0-1.310.28-1.760.73-2.43-0.97-5.22-0.96-7.630.06a9.93 9.93 0 0 0-3.18 2.14 9.92 9.92 0 0 0-2.14 3.18A10.01 10.01 0 0 0 2 12zm17.37 3.12c-0.40.95-0.98 1.81-1.71 2.54s-1.59 1.31-2.54 1.71a8.12 8.12 0 0 1-6.130.04A2.49 2.49 0 0 0 6.5 17C5.11 17 4 18.11 4 19.5S5.11 22 6.5 22c0.69 0 1.31-0.28 1.76-0.72A9.97 9.97 0 0 0 12 22a9.98 9.98 0 0 0 9.22-6.1A9.99 9.99 0 0 0 22 12h-2a7.99 7.99 0 0 1-0.63 3.12z"}],["path",{"d":"M12 7.46c-2.5 0-4.54 2.04-4.54 4.54S9.5 16.54 12 16.54s4.54-2.04 4.54-4.54S14.5 7.46 12 7.46zm0 7.08c-1.4 0-2.54-1.14-2.54-2.54S10.6 9.46 12 9.46s2.54 1.14 2.54 2.54-1.14 2.54-2.54 2.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAnalyse;
