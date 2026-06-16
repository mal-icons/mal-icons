import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-signal-wifi-bad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSignalWifiBad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.21 8.24A16.87 16.87 0 0 0 12 4C7.7 4 3.78 5.60.79 8.240.35 8.630.32 9.30.73 9.71l10.56 10.58c0.190.190.450.290.70.29V14c0-1.10.9-2 2-2h6.99l2.29-2.29c0.41-0.410.38-1.08-0.06-1.47z"}],["path",{"d":"M20.3 14.71a11 0 0 0-1.41 0l-1.39 1.38-1.39-1.38a11 0 1 0-1.41 1.41l1.39 1.39-1.39 1.39a11 0 1 0 1.41 1.41l1.39-1.38 1.39 1.38a11 0 1 0 1.41-1.41l-1.38-1.39 1.38-1.39a11 0 0 0 0-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSignalWifiBad;
