import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-1dot1dot1dot1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Si_1dot1dot1dot1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.39 0A5.38 5.38 0 0 0 0 5.39V18.61A5.38 5.38 0 0 0 5.39 24H18.61A5.38 5.38 0 0 0 24 18.61V5.39A5.38 5.38 0 0 0 18.61 0Zm11.55 4.6h0.94v3.12h0.69v0.87h-0.69v1.2h-1V8.59H14.68v-0.96zm-6.070.59h2.52v14.84h-3.09V9.79H6.68V7.81c0.95-0.04 1.62-0.1 2-0.180.61-0.13 1.1-0.39 1.48-0.780.26-0.270.46-0.620.59-1.060.08-0.270.12-0.460.12-0.59Zm5.990.73L15.51 7.72h1.37V5.92Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Si_1dot1dot1dot1;
