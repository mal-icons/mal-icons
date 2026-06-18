import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rubocop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRubocop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.06 0C7.71 0 4.12 3.25 3.58 7.46h16.95C20 3.25 16.41 0 12.06 0zM3.93 7.95a1.54 1.54 0 0 0-1.54 1.54v0.77c-0.360.22-0.60.61-0.6 1.06v2.07c0 0.450.240.840.6 1.06v0.8a1.54 1.54 0 0 0 1.54 1.54h16.14a1.54 1.54 0 0 0 1.54-1.54v-0.8c0.36-0.220.6-0.610.6-1.06V11.32c0-0.45-0.24-0.84-0.6-1.06v-0.77A1.54 1.54 0 0 0 20.07 7.95zm1.47 3.15h13.2c0.62 0 1.130.51 1.13 1.13s-0.51 1.13-1.13 1.13H5.4c-0.62 0-1.13-0.51-1.13-1.13s0.51-1.13 1.13-1.13zm-1.42 6v3.28A3.64 3.64 0 0 0 7.61 24h8.94a3.64 3.64 0 0 0 3.63-3.63v-3.28h-1.99v3.27c0 0.9-0.73 1.63-1.63 1.63h-0.89v0a0.620.62 0 0 1-0.48-0.23h0l-1.06-1.36h0a0.620.62 0 0 0-0.49-0.24h-3.09a0.620.62 0 0 0-0.460.21h0L8.98 21.76h0a0.620.62 0 0 1-0.480.23v0h-0.89a1.64 1.64 0 0 1-1.63-1.63v-3.27zm50.8-0.820.950.770.670.52-0.6h5.05l0.520.60.77-0.67-0.82-0.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRubocop;
