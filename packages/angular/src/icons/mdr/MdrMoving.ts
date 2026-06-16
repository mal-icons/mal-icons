import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-moving",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMoving {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.7 17.29c0.390.39 1.020.39 1.41 0L8.7 12.7a11 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0L19.7 9.7l1.44 1.44a0.50.5 0 0 0 0.85-0.35V6.5a0.480.48 0 0 0-0.49-0.5h-4.29c-0.45 0-0.670.54-0.350.85l1.44 1.44-4.17 4.17a11 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2.7 15.88c-0.380.39-0.38 1.03 0 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMoving;
