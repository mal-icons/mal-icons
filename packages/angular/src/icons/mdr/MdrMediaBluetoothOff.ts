import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-media-bluetooth-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMediaBluetoothOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 6.17V5c0-1.10.9-2 2-2h2c1.1 0 2 0.9 2 2s-0.9 2-2 2h-2v1.17l-2-2zM19.42 15l2.18 2.17c0.220.220.220.58 0 0.8-0.220.22-0.580.22-0.8 0l-5.98-5.98a0.570.57 0 0 1 0-0.8c0.22-0.220.58-0.220.8 0l2.35 2.35V9.61c0-0.450.54-0.670.85-0.35l2.82 2.82c0.20.20.20.51 0 0.71L19.42 15zm-0.25-1.45 1.13-1.13-1.13-1.13v2.26zm1.32 6.94a11 0 1 1-1.41 1.41l-3.28-3.28-0.160.16a0.610.61 0 0 1-0.85 0 0.610.61 0 0 1 0-0.85l0.16-0.16L11 13.83v3.02c0 2.07-1.68 4.01-3.74 4.14C4.94 21.13 3 19.29 3 17c0-2.21 1.79-4 4.01-4 0.73 0 1.410.21 2 0.55v-1.72L2.1 4.92a11 0 1 1 1.41-1.41l16.98 16.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMediaBluetoothOff;
