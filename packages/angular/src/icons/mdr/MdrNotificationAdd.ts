import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-notification-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNotificationAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h1c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1h1v-7c0-2.79 1.91-5.14 4.5-5.8v-0.7c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v0.7c0.710.18 1.360.49 1.950.9A5.9 5.9 0 0 0 14 9zm9-1h-2V6c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNotificationAdd;
