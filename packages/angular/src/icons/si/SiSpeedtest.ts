import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-speedtest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSpeedtest {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.63 16.19l-2.05-2.14 6.79-5.95 1.21 1.3zm8.84 6.05c2.14-2.14 3.54-5.12 3.54-8.47 0-6.6-5.39-12-12-12s-12 5.4-12 12c0 3.35 1.3 6.33 3.54 8.47l1.67-1.67c-1.77-1.77-2.79-4.09-2.79-6.79A9.57 9.57 0 0 1 12 4.18a9.57 9.57 0 0 1 9.58 9.58c0 2.61-1.12 5.02-2.79 6.79Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSpeedtest;
