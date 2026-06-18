import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-handshake-protocol",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHandshakeProtocol {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.35 7.83l-1.49-2.65 2.890c0.08 0 0.170.050.210.12l1.53 2.53zm-5.34 16.05c-0.070.13-0.160.13-0.190.13h-2.96l4.59-8.24a0.440.44 0 0 0-0.38-0.66l-7.820.01-1.56-2.69h11.4c0.25-0.020.36-0.160.39-0.23l1.88-3.47h3.1zm-3.91-0.31l-1.52-2.51c-0.02-0.04-0.03-0.130.01-0.21l2.69-4.85 3.030zM5.92 18.4l-1.51-2.68 1.52-2.85 1.52 2.64c-0.470.89-1.21 2.28-1.54 2.89zm-3.670.42a0.270.27 0 0 1-0.21-0.12L0.51 16.17h3.14l1.49 2.65-2.890zM90.13C9.07 0 9.16 0 9.19 0h2.97L7.55 8.24c-0.110.17-0.110.710.580.66l7.63-0.01c0.530.92 1 1.75 1.51 2.64H5.92a0.470.47 0 0 0-0.40.23l-1.88 3.52h-3.1L90.13zm3.920.32l1.52 2.5c0.020.040.030.13-0.010.21L11.72 8.01l-3.030zm5.17 5.15l1.51 2.68-1.54 2.84c-0.52-0.9-1-1.74-1.53-2.670.33-0.6 1.2-2.19 1.56-2.85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHandshakeProtocol;
