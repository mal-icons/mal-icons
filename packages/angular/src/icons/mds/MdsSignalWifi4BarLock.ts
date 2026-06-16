import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-signal-wifi-4-bar-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSignalWifi4BarLock {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.98 11 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-0.450.09-0.880.23-1.290.54-1.57 2.01-2.71 3.77-2.71h2.93z"}],["path",{"d":"M22 15.11c0-1-0.68-1.92-1.66-2.08-0.12-0.02-0.24-0.02-0.36-0.02h-0.01c-1.090.02-1.970.9-1.97 1.99v1h-1v5h6v-5h-1v-0.89zM21 16h-2v-1c0-0.550.45-1 1-1s1 0.45 1 1v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSignalWifi4BarLock;
