import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-pentagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPentagon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.47 10.42 3.07 9.22c0.280.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c0.28-0.84-0.03-1.76-0.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-0.720.51-1.03 1.44-0.75 2.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPentagon;
