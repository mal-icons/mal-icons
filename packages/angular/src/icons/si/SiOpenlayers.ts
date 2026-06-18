import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-openlayers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpenlayers {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.7 13.08a3.5 3.5 0 0 1-1.12 1.62l-7.43 6.2a5.14 5.14 0 0 1-6.32 0L1.41 14.7a3.58 3.58 0 0 1-1.12-1.62 3.3 3.3 0 0 0 1.12 3.64l7.43 6.2a5.14 5.14 0 0 0 6.32 0l7.43-6.2a3.3 3.3 0 0 0 1.12-3.64M8.84 1.09a5.14 5.14 0 0 1 6.32 0l7.43 6.2a3.3 3.3 0 0 1 0 5.26l-7.43 6.19a5.14 5.14 0 0 1-6.32 0L1.41 12.53a3.3 3.3 0 0 1 0-5.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpenlayers;
