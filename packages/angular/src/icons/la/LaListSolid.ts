import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-list-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaListSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 5 L 4 11 L 10 11 L 10 5 Z M 6 7 L 8 7 L 8 9 L 6 9 Z M 12 7 L 12 9 L 27 9 L 27 7 Z M 4 13 L 4 19 L 10 19 L 10 13 Z M 6 15 L 8 15 L 8 17 L 6 17 Z M 12 15 L 12 17 L 27 17 L 27 15 Z M 4 21 L 4 27 L 10 27 L 10 21 Z M 6 23 L 8 23 L 8 25 L 6 25 Z M 12 23 L 12 25 L 27 25 L 27 23 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaListSolid;
