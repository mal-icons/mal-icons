import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-portable-wifi-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPortableWifiOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.71 3.07a11 0 0 0 0 1.41L4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.3 1.6 6.22 4.06 8.040.480.35 1.160.21 1.46-0.310.25-0.430.14-0.99-0.26-1.29C5.29 16.98 4 14.65 4 12c0-1.760.57-3.38 1.53-4.69l1.43 1.44a5.97 5.97 0 0 0 1.1 7.76c0.460.4 1.190.25 1.5-0.28l0.01-0.01c0.24-0.420.13-0.94-0.23-1.26A3.95 3.95 0 0 1 8 12c0-0.650.17-1.250.44-1.79l1.58 1.58L10 12c0 1.10.9 2 2 2l0.21-0.02 6.81 6.81a11 0 1 0 1.41-1.41L4.13 3.07c-0.39-0.39-1.03-0.39-1.42 0zm15 10.75c0.18-0.570.29-1.190.29-1.82 0-3.31-2.69-6-6-6-0.63 0-1.250.11-1.820.29l1.72 1.72c0.03 0 0.06-0.010.1-0.01 2.21 0 4 1.79 4 4 0 0.04-0.010.07-0.010.11l1.72 1.71zM12 4c4.42 0 8 3.58 8 8 0 1.2-0.29 2.32-0.77 3.35l1.49 1.49A9.82 9.82 0 0 0 22 12c0-5.52-4.48-10-10-10-1.76 0-3.40.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPortableWifiOff;
