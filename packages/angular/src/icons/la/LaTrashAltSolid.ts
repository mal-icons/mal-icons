import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-trash-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTrashAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 4 C 14.48 4 13.94 4.18 13.56 4.56 C 13.18 4.94 13 5.48 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.64 9.36 28 11 28 L 23 28 C 24.64 28 26 26.64 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.48 20.82 4.94 20.44 4.56 C 20.06 4.18 19.52 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.55 23.55 26 23 26 L 11 26 C 10.45 26 10 25.55 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTrashAltSolid;
