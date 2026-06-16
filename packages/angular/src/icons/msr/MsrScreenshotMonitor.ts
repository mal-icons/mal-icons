import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-screenshot-monitor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrScreenshotMonitor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M720-360H620q-8 0-14 6t-6 14q0 8 6 14t14 6h110q12.75 0 21.38-8.62T760-350v-110q0-8-6-14t-14-6q-8 0-14 6t-6 14v100ZM240-680h100q8 0 14-6t6-14q0-8-6-14t-14-6H230q-12.75 0-21.37 8.63T200-690v110q0 8 6 14t14 6q8 0 14-6t6-14v-100ZM140-200q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v50q0 12.75-8.62 21.38T600-120H360q-12.75 0-21.37-8.62T330-150v-50H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrScreenshotMonitor;
