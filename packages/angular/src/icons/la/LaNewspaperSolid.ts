import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-newspaper-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaNewspaperSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3 5 L 3 23 C 3 25.21 4.79 27 7 27 L 25 27 C 27.21 27 29 25.21 29 23 L 29 12 L 23 12 L 23 5 Z M 5 7 L 21 7 L 21 23 C 21 23.73 21.22 24.41 21.56 25 L 7 25 C 5.81 25 5 24.19 5 23 Z M 7 9 L 7 14 L 19 14 L 19 9 Z M 9 11 L 17 11 L 17 12 L 9 12 Z M 23 14 L 27 14 L 27 23 C 27 24.19 26.19 25 25 25 C 23.81 25 23 24.19 23 23 Z M 7 15 L 7 17 L 12 17 L 12 15 Z M 14 15 L 14 17 L 19 17 L 19 15 Z M 7 18 L 7 20 L 12 20 L 12 18 Z M 14 18 L 14 20 L 19 20 L 19 18 Z M 7 21 L 7 23 L 12 23 L 12 21 Z M 14 21 L 14 23 L 19 23 L 19 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaNewspaperSolid;
