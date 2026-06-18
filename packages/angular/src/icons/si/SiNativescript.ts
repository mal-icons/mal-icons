import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nativescript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNativescript {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.77 1.76A5.68 5.68 0 0 1 5.8 0h12.6c1.37 0 2.650.6 3.83 1.76A5.43 5.43 0 0 1 24 5.7v12.77c0 1.34-0.56 2.58-1.68 3.73A5.77 5.77 0 0 1 18.25 24H5.87a6.3 6.3 0 0 1-4.1-1.57C0.69 21.450.1 20.03 0 18.13V5.73a5.21 5.21 0 0 1 1.77-3.97zm6.25 8.3l7.93 10.06h2.12c0.49-0.060.88-0.2 1.17-0.430.3-0.230.5-0.560.64-1v-4.94c0.08-0.950.67-1.54 1.77-1.75-1.1-0.4-1.69-1.02-1.77-1.86V5.42c-0.12-0.44-0.33-0.8-0.64-1.07a1.83 1.83 0 0 0-1.09-0.47H16v10.2L8.02 3.87H5.79c-0.560.1-0.970.3-1.250.6S4.08 5.25 4 5.9v4.85c-0.350.69-0.9 1.1-1.65 1.250.850.16 1.40.61 1.65 1.36v4.77c0.020.550.2 1 0.54 1.370.330.360.70.53 1.10.5H8l0.02-9.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNativescript;
