import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-film-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFilmSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 28 L 28 28 L 28 4 Z M 6 6 L 8 6 L 8 7 L 10 7 L 10 6 L 22 6 L 22 7 L 24 7 L 24 6 L 26 6 L 26 26 L 24 26 L 24 25 L 22 25 L 22 26 L 10 26 L 10 25 L 8 25 L 8 26 L 6 26 Z M 8 9 L 8 11 L 10 11 L 10 9 Z M 22 9 L 22 11 L 24 11 L 24 9 Z M 8 13 L 8 15 L 10 15 L 10 13 Z M 22 13 L 22 15 L 24 15 L 24 13 Z M 8 17 L 8 19 L 10 19 L 10 17 Z M 22 17 L 22 19 L 24 19 L 24 17 Z M 8 21 L 8 23 L 10 23 L 10 21 Z M 22 21 L 22 23 L 24 23 L 24 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFilmSolid;
