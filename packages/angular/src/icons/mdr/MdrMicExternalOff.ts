import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-mic-external-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMicExternalOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 6a2.01 2.01 0 0 1 2.42-1.96c0.940.2 1.58 1.09 1.58 2.05v9.08l2 2V6.16c0-2.08-1.68-4.03-3.76-4.15A3.99 3.99 0 0 0 12 6v3.17l2 2V6zm-4-1c0-1.66-1.34-3-3-3-0.62 0-1.190.19-1.670.5l4.15 4.15C9.8 6.18 10 5.61 10 5zM1.39 2.81a11 0 0 0 0 1.41L5.17 8H5.1c-0.59 0-1.050.51-1 1.1l0.85 8.45c0.030.260.250.450.50.45H6c0 2.34 2.01 4.21 4.39 3.98 2.08-0.2 3.61-2.06 3.61-4.15v-1l5.78 5.78a11 0 1 0 1.41-1.41L2.81 2.81c-0.39-0.39-1.03-0.39-1.42 0zM12 17.91c0 0.96-0.64 1.86-1.58 2.05A2.01 2.01 0 0 1 8 18h0.55a0.50.5 0 0 0 0.5-0.45l0.52-5.16L12 14.83v3.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMicExternalOff;
