import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-energy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlEnergy {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M595.34 64.72h0.18-0.18zm0 0l-72.21 379.38 261.580.88L428.66 959.28l72.21-417.38-261.57-0.91zm0.05-64c-1.73 0-3.450.06-5.150.19-11.30.91-18.78 4.69-27.66 10.66a64.3 64.3 0 0 0-13.39 11.94 56.69 56.69 0 0 0-3.3 4.29L187.28 502.4c-14.16 19.41-16.24 45.03-5.36 66.43 10.86 21.41 32.83 34.98 56.91 35.15l184.74 1.34-58.08 342.19c-5.52 29.41 10.16 58.72 37.76 70.53a64.19 64.19 0 0 0 25.39 5.22c20.11 0 36.64-9.41 49.04-26.4L836.74 482.56c14.16-19.41 16.23-45.06 5.36-66.43-10.86-21.41-32.83-34.98-56.91-35.15l-184.74-0.32 57.46-300.88a62.46 62.46 0 0 0 1.83-15.06c0-34.62-27.57-62.85-62.06-63.97-0.77-0.03-1.52-0.03-2.27-0.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlEnergy;
