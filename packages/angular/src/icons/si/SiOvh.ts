import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ovh",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOvh {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.88 10.1l2.56-4.45C23.43 7.39 24 9.4 24 11.56c0 2.88-1.02 5.52-2.71 7.59h-6.62l2.04-3.54h-2.7l3.18-5.51h2.69zm-2.32-5.24L9.33 19.14l00.01H2.71C1.01 17.08 0 14.44 0 11.56c0-2.150.57-4.17 1.56-5.92L5.86 13.1 10.6 4.85h6.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOvh;
