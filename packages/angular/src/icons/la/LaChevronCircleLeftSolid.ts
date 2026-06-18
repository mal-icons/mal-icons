import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chevron-circle-left-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChevronCircleLeftSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 16 5 C 22.09 5 27 9.91 27 16 C 27 22.09 22.09 27 16 27 C 9.91 27 5 22.09 5 16 C 5 9.91 9.91 5 16 5 Z M 17.78 9.28 L 11.78 15.28 L 11.09 16 L 11.78 16.72 L 17.78 22.72 L 19.22 21.28 L 13.94 16 L 19.22 10.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChevronCircleLeftSolid;
