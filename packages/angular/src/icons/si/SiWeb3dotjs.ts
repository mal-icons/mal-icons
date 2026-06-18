import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-web3dotjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWeb3dotjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.890.78S0 1.29 0 2.32V7.44s0 3.08 2.67 4.62c0.820.47 1.380.51 1.780.330.390.630.96 1.25 1.78 1.72 2.67 1.54 2.67-1.54 2.67-1.54V7.45c0-1.030.89-1.540.89-1.54l3.56-2.05s0.89-0.51 1.78 0c0.890.51 0 1.03 0 1.03L11.56 6.93l1.78 1.02 3.56-2.06c0.05-0.030.91-0.49 1.7700.890.51 0 1.03 0 1.03l-3.55 2.05s-0.890.51-0.89 1.54v5.12s0 1.03-0.890.51c-0.89-0.51-0.89-1.54-0.89-1.54l-1.78-1.03s0 3.08 2.67 4.62c2.67 1.54 2.67-1.54 2.67-1.54v-5.13c0-1.030.89-1.540.89-1.54l4.45-2.57s1.78-1.02-0.89-2.56c-0.82-0.47-1.55-0.7-2.18-0.8-0.16-0.36-0.56-0.78-1.38-1.24-2.67-1.52-5.33-0.02-5.33-0.02L8 4.88s-0.890.51-0.89 1.54v5.13s0 1.03-0.890.51c-0.89-0.51-0.89-1.54-0.89-1.54V5.4c0-0.060-0.130.01-0.190.1-0.90.88-1.350.88-1.35L4.45 2.83l00c-0.050.03-0.880.54-0.88 1.54v5.13s0 1.03-0.890.51c-0.89-0.51-0.89-1.54-0.89-1.54V3.34c0-1.030.89-1.540.89-1.54L0.890.78zm9.78 8.74v2.05l1.78 1.02v-2.05L10.67 9.51zm8.44 2.18c-0.670.01-1.330.39-1.33 1.91 0 3.04 2.67 4.62 2.67 4.62l0.890.51s0.890.510.89 1.54-0.890.51-0.890.51l-3.55-2.05v2.05l3.56 2.05S24 24.38 24 21.3c0-3.08-1.78-4.11-1.78-4.11l-1.78-1.02s-0.89-0.51-0.89-1.54c0-1.030.89-0.510.89-0.51L24 16.17v-2.05l-3.55-2.05s-0.67-0.38-1.33-0.37Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWeb3dotjs;
