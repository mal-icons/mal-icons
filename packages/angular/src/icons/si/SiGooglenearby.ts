import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googlenearby",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGooglenearby {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.55 12L12 6.55l5.45 5.46-5.45 5.45zm16.98-1.15L13.160.48a1.64 1.64 0 0-2.31 0L0.48 10.85a1.63 1.63 0 0 2.31L10.85 23.52a1.63 1.63 0 2.3 0l10.37-10.37a1.63 1.63 0 0-2.31zM12 20.73l-8.73-8.73L12 3.27l8.73 8.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGooglenearby;
