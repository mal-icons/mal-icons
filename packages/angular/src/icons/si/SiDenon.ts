import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-denon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDenon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m9.37 11.24 3.39 3.36v-5.07h-0.78v3.16L8.58 9.41v5.08h0.78V11.27l0.01-0.03m-4.5 3.25V9.53h2.79v0.77H5.65v1.16h1.56v0.77H5.65v1.47h2v0.77H4.87M20.58 11.23 24 14.58V9.53h-0.78v3.2l0-0.01-3.42-3.31v5.08h0.79v-3.23l0-0.02M0.78 13.75v-3.5h0.69s1.76-0.03 1.76 1.77c0 1.65-1.59 1.73-1.59 1.73H0.78zM0 9.53v4.96h1.66s2.34-0.19 2.34-2.5c0-2.37-2.34-2.46-2.34-2.46H0zm14.42 2.45c0 0.550.19 1.010.56 1.360.710.72 1.930.7 2.62-0.010.72-0.690.72-1.990.01-2.68-0.67-0.73-1.97-0.72-2.64 0-0.360.36-0.540.8-0.54 1.33zm-0.76-0.01c0-0.70.26-1.310.78-1.810.98-1 2.72-1.02 3.70.01 1.030.97 1.03 2.710 3.66-0.960.96-2.6 1.01-3.620.08-0.57-0.49-0.85-1.14-0.85-1.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDenon;
