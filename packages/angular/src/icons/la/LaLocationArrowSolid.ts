import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-location-arrow-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaLocationArrowSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4.44 L 15.09 6.63 L 7.09 25.63 L 6.19 27.75 L 8.34 26.94 L 16 24.06 L 23.66 26.94 L 25.81 27.75 L 24.91 25.63 L 16.91 6.63 Z M 16 9.53 L 22.19 24.25 L 16.34 22.06 L 16 21.94 L 15.66 22.06 L 9.81 24.25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaLocationArrowSolid;
