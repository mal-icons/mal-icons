import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-notification-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNotificationAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8V2h3v2.2c0.710.18 1.360.49 1.950.9A5.9 5.9 0 0 0 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNotificationAdd;
