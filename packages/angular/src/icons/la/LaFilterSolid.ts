import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-filter-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFilterSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 4 L 5 6.34 L 5.22 6.63 L 13 16.34 L 13 28 L 14.59 26.81 L 18.59 23.81 L 19 23.5 L 19 16.34 L 26.78 6.63 L 27 6.34 L 27 4 Z M 7.28 6 L 24.72 6 L 17.53 15 L 14.47 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFilterSolid;
