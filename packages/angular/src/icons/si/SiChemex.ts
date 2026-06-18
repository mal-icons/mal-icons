import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-chemex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiChemex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.670.12c-0.74 0-1.360.59-1.36 1.33 0 0.740.62 1.34 1.36 1.34A1.33 1.33 0 0 0 24 1.46 1.33 1.33 0 0 0 22.670.12zM1.110.15s5.31 6.75 5.98 7.91c0.89 1.560.84 2.08-0.12 3.95C6.35 13.2 0 23.88 0 23.88h2.69S8.7 13.67 9.52 12.28c0.89-1.510.89-3.160.15-4.47C9.07 6.77 3.830.15 3.830.15zm16.96 0s-5.24 6.62-5.83 7.66c-0.72 1.29-0.77 2.920.15 4.470.82 1.38 6.82 11.59 6.82 11.59h2.67c0-0.02-6.33-10.68-6.95-11.89-0.96-1.85-1.01-2.37-0.12-3.930.67-1.16 5.98-7.91 5.98-7.91zm4.60.22c0.59 0 1.090.49 1.09 1.09 0 0.59-0.49 1.09-1.09 1.09a1.1 1.1 0 0 1-1.09-1.09A1.08 1.08 0 0 1 22.670.37zm-0.590.3V2.15h0.27v-0.52h0.37l0.270.52h0.32l-0.3-0.54a0.450.45 0 0 0 0.3-0.45c0-0.3-0.2-0.49-0.52-0.49zm0.320.27h0.45c0.15 0 0.220.050.220.22 0 0.17-0.120.22-0.220.22h-0.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiChemex;
