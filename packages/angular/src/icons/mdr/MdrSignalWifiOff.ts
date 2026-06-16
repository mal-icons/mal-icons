import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-signal-wifi-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSignalWifiOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.64 7c-0.45-0.34-4.93-4-11.64-4-1.32 0-2.550.14-3.690.38L18.43 13.5 23.64 7zM4.12 2.01a11 0 1 0-1.41 1.41l1.35 1.35C1.91 5.760.59 6.820.36 7l10.08 12.56c0.8 1 2.32 1 3.12 0l2.35-2.93 2.61 2.61a11 0 1 0 1.41-1.41L4.12 2.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSignalWifiOff;
