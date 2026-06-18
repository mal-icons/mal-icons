import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zelle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZelle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.56 24h-2.84a0.480.48 0 0 1-0.48-0.48v-2.76H5.64a0.670.67 0 0 1-0.67-0.67v-2.23a0.670.67 0 0 1 0.14-0.41l8.14-10.38h-7.25a0.670.67 0 0 1-0.67-0.67V3.91c0-0.370.3-0.670.67-0.67h4.23V0.48c0-0.270.22-0.480.48-0.48h2.84c0.27 0 0.480.220.480.48v2.77h4.32c0.37 0 0.670.30.670.67v2.14a0.670.67 0 0 1-0.140.41l-8.19 10.48h7.67c0.37 0 0.670.30.670.67v2.48a0.670.67 0 0 1-0.670.67h-4.32v2.77a0.480.48 0 0 1-0.480.48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZelle;
