import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-perm-camera-mic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPermCameraMic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2s2-0.9 2-2V8c0-1.1-0.9-2-2-2zm8-1h-3.17l-1.86-2H8.96L7.17 5H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm0 14h-7v-1.09c2.83-0.48 5-2.94 5-5.91h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.97 2.17 5.43 5 5.91V19H4V7h4.21l0.59-0.65L10.04 5h4.24l1.24 1.350.590.65H20v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPermCameraMic;
