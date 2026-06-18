import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bigbluebutton",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBigbluebutton {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM6.84 4.52c0.74 0 1.380.36 1.9 1.090.530.730.79 1.60.79 2.63v6.76c0 0.540.270.810.810.81h4.17c0.54 0 0.81-0.270.81-0.81v-3.2c0-0.52-0.27-0.79-0.81-0.81h-0.81c-1.04-0.04-1.92-0.31-2.64-0.82-0.72-0.51-1.08-1.13-1.08-1.88h4.52c0.97 0 1.80.34 2.48 1.02a3.37 3.37 0 0 1 1.02 2.48v3.21c0 0.97-0.34 1.8-1.02 2.48-0.680.68-1.51 1.02-2.48 1.02h-4.17c-0.97 0-1.79-0.34-2.48-1.02a3.38 3.38 0 0 1-1.02-2.48V4.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBigbluebutton;
