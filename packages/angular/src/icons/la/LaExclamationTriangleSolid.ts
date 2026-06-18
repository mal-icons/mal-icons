import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-exclamation-triangle-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaExclamationTriangleSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3.22 L 15.13 4.72 L 3.13 25.5 L 2.28 27 L 29.72 27 L 28.88 25.5 L 16.88 4.72 Z M 16 7.22 L 26.25 25 L 5.75 25 Z M 15 14 L 15 20 L 17 20 L 17 14 Z M 15 21 L 15 23 L 17 23 L 17 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaExclamationTriangleSolid;
