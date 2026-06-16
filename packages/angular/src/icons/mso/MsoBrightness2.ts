import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-brightness-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBrightness2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M374-820q-20 0-41 2t-32 5q64 72 98 157t34 176q0 91-34 176.5T302-148q11 3 31 5.5t43 2.5q140.07 0 238.53-98Q713-336 713-480t-99.5-242Q514-820 374-820Zm8-60q80.83 0 151.91 30.5Q605-819 658.5-765.5t84 126.5Q773-566 773-481t-30.95 158.29q-30.95 73.29-84 127.5Q605-141 533.59-110.5 462.19-80 381-80q-54.38 0-106.19-13Q223-106 188-126q88-66 136.5-158T373-479.5Q373-583 324-676T187-833q35-20 87.47-33.5Q326.94-880 382-880Zm51 401Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBrightness2;
