import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-couch-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCouchSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 7 C 4.36 7 3 8.36 3 10 L 3 12.19 C 1.84 12.61 1 13.71 1 15 L 1 26 L 3 26 L 3 24 L 29 24 L 29 26 L 31 26 L 31 15 C 31 13.71 30.16 12.61 29 12.19 L 29 10 C 29 8.36 27.64 7 26 7 Z M 6 9 L 26 9 C 26.55 9 27 9.45 27 10 L 27 12.19 C 25.84 12.61 25 13.71 25 15 L 25 17 L 7 17 L 7 15 C 7 13.71 6.16 12.61 5 12.19 L 5 10 C 5 9.45 5.45 9 6 9 Z M 4 14 C 4.55 14 5 14.45 5 15 L 5 19 L 27 19 L 27 15 C 27 14.45 27.45 14 28 14 C 28.55 14 29 14.45 29 15 L 29 22 L 3 22 L 3 15 C 3 14.45 3.45 14 4 14 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCouchSolid;
