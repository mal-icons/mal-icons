import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sd-card-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSdCardSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9.5 5 L 9.19 5.41 L 6 9.66 L 6 27 L 25 27 L 25 5 Z M 10.5 7 L 23 7 L 23 25 L 8 25 L 8 10.34 Z M 13 9 L 13 13 L 15 13 L 15 9 Z M 16 9 L 16 13 L 18 13 L 18 9 Z M 19 9 L 19 13 L 21 13 L 21 9 Z M 10 10 L 10 14 L 12 14 L 12 10 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSdCardSolid;
