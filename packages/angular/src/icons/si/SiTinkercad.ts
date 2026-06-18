import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tinkercad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTinkercad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v7.32h7.32V0H0zm8.34 0v7.32h7.32V0H8.34zm8.34 0v7.32H24V0h-7.32zM1.61 1.27h4.11V2.33h-1.4v3.73H3.06V2.33h-1.45V1.26zm9.77 0h1.26V6.05h-1.26V1.27zm6.81 0h1.69l1.46 3.29v-3.29h1.16v4.79H20.82l-1.47-3.26V6.05h-1.16V1.27zM0 8.34v7.32h7.32V8.34H0zm8.34 0v7.32h7.32V8.34H8.34zm8.34 0v7.32H24V8.34h-7.32zm-6.32 1.26h3.19v0.97h-1.93v0.92H13.5v0.92h-1.88v1.07h2.03v0.92h-3.29V9.61zm8.16 0h1.91c1.08 0 1.720.5 1.72 1.32 0 0.54-0.280.94-0.8 1.140.220.140.350.370.490.71l0.65 1.63h-1.35l-0.010.01-0.43-1.22c-0.2-0.53-0.29-0.66-0.7-0.66h-0.25v1.89h-1.21V9.61zM1.6 9.61h1.26v1.76L4.3 9.61h1.51l-2.02 2.25 2.18 2.54H4.39l-1.54-1.94v1.94H1.6V9.61zm18.130.92v1.07h0.33c0.38 0 0.83-0.090.83-0.57 0-0.36-0.23-0.49-0.8-0.49h-0.36zM0 16.68V24h7.32v-7.32H0zm8.34 0V24h7.32v-7.32H8.34zm8.34 0V24H24v-7.32h-7.32zm-12.42 1.2c0.38 0 0.820.07 1.170.17l0.090.02-0.05 1.02-0.16-0.07a2.42 2.42 0 0 0-0.89-0.17c-0.88 0-1.470.56-1.47 1.49s0.54 1.48 1.45 1.48c0.35 0 0.66-0.060.93-0.18l-0.0100.16-0.070.060.99-0.080.03c-0.330.13-0.750.2-1.190.2-0.76 0-1.41-0.22-1.87-0.63-0.47-0.43-0.73-1.06-0.73-1.82 0-1.42 1.1-2.46 2.61-2.46zm70.07h1.48l1.82 4.78H13.26l-0.4-1.16H11.1l-0.41 1.16H9.44l1.82-4.78zm6.97 0h1.72c1.63 0 2.520.83 2.52 2.33v0c0 1.54-0.99 2.46-2.65 2.46h-1.59V17.95zm1.260.92v2.95h0.2c0.98 0 1.49-0.55 1.49-1.54 0-0.89-0.49-1.41-1.37-1.41h-0.31zm-7.50.19-0.6 1.6h1.17l-0.57-1.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTinkercad;
