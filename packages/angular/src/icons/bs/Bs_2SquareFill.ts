import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-2-square-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Bs_2SquareFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.65 6.24v0.07H5.38v-0.06c0-1.210.88-2.4 2.64-2.4 1.58 0 2.610.95 2.61 2.22 0 1-0.6 1.67-1.29 2.43l-0.10.11-1.97 2.22v0.08h3.5V12H5.42v-0.83l2.97-3.29c0.43-0.470.9-1.010.9-1.7 0-0.74-0.56-1.24-1.31-1.24-0.84 0-1.340.62-1.34 1.31"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Bs_2SquareFill;
