import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-arrow-circle-up-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaArrowCircleUpSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 16 5 C 22.09 5 27 9.91 27 16 C 27 22.09 22.09 27 16 27 C 9.91 27 5 22.09 5 16 C 5 9.91 9.91 5 16 5 Z M 16 8.88 L 9.59 15.28 L 11 16.72 L 15 12.72 L 15 23 L 17 23 L 17 12.72 L 21 16.72 L 22.41 15.28 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaArrowCircleUpSolid;
