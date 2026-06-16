import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-send-and-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSendAndArchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 7.01v3.49l6 1.5-6 1.5v3.49l5.39-2.27a6.99 6.99 0 0 1 3.48-3.97L5 7.01z","opacity":".3"}],["path",{"d":"m11 12-6-1.5V7.01l8.87 3.73c0.94-0.47 2-0.75 3.13-0.750.1 0 0.190.010.280.01L3 4v16l7-2.95V17c0-0.80.14-1.560.39-2.28L5 16.99V13.5l6-1.5z"}],["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3h2.5v-3h1v3H20l-3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSendAndArchive;
