import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-snowshoeing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSnowshoeing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 3.5c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm7.5 8.41c0-0.49-0.36-0.9-0.84-0.98-1.53-0.25-2.79-1.16-3.47-2.35l-1-1.58c-0.4-0.6-1-1-1.7-1-0.68 0-1.280.28-4.77 1.76C7.49 8.07 7 8.8 7 9.6V12c0 0.550.45 1 1 1s1-0.45 1-1V9.58l1.79-0.7L9.2 17l-2.88 2.03-1.14-1.47L4 18.5l2.38 3.04c0.510.65 1.16 1.15 1.88 1.410.280.10.530.040.72-0.110.3-0.230.42-0.70.12-1.07a0.840.84 0 0 0-0.31-0.22 2.97 2.97 0 0 1-1.14-0.83l-0.08-0.1 2.85-2.01c0.38-0.270.65-0.660.77-1.1l0.7-2.53 2.11 2v4.52h-2V23h3.87c0.82 0 1.61-0.21 2.26-0.610.26-0.160.37-0.390.37-0.64 0-0.38-0.3-0.75-0.77-0.75-0.13 0-0.260.04-0.370.1-0.40.23-0.870.37-1.360.4v-5.16c0-0.55-0.23-1.07-0.62-1.45l-1.49-1.410.6-3a7.37 7.37 0 0 0 4.37 2.43c0.60.1 1.14-0.39 1.14-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSnowshoeing;
