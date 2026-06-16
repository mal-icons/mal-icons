import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-vrpano",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsVrpano {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-0.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.090.73-5.23 1.9-10 1.9zm0 9.5c-2.34 0-4.520.15-6.520.41l3.69-4.42 2 2.4L14 10l4.51 5.4c-1.99-0.25-4.21-0.4-6.51-0.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsVrpano;
