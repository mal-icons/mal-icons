import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-random-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRandomSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 23 3 L 23 7 L 18.41 7 L 18.13 7.5 L 14.5 13.97 L 10.59 7 L 4 7 L 4 9 L 9.41 9 L 13.34 16 L 9.41 23 L 4 23 L 4 25 L 10.59 25 L 19.59 9 L 23 9 L 23 13 L 28 8 Z M 16.78 18 L 15.63 20.06 L 18.41 25 L 23 25 L 23 29 L 28 24 L 23 19 L 23 23 L 19.59 23 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRandomSolid;
