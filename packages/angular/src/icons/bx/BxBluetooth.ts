import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-bluetooth",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBluetooth {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m4.41 16.19 1.18 1.62L10 14.58V21a1 1 0 0 0 1.540.84l7-4.5a11 0 0 0 0.05-1.65L13.54 12l5.05-3.69a1 1 0 0 0-0.05-1.65l-7-4.5a1 1 0 0 0-1.02-0.04c-0.320.18-0.520.51-0.520.88v6.42L5.59 6.19 4.41 7.81 10 11.89v0.22l-5.59 4.08zM12 4.83l4.23 2.72L12 10.65V4.83zm0 8.52 4.23 3.09L12 19.17v-5.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBluetooth;
