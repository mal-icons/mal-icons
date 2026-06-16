import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-9 8.3c0 0.93-0.64 1.71-1.5 1.93v6.02c0 0.41-0.340.75-0.750.75S8 18.66 8 18.25v-6.02c-0.86-0.22-1.5-1-1.5-1.93V6.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V9h0.75V6.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V9H10V6.5c0-0.280.23-0.50.5-0.50.28 0 0.50.220.50.5v3.8zm4.58 2.29-0.080.03v5.63c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75v-5.63l-0.08-0.04c-0.97-0.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4 1.38 0 2.5 1.53 2.5 3.41 0 1.48-0.7 2.71-1.67 3.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDining;
