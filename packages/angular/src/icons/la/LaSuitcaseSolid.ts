import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-suitcase-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSuitcaseSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14 3 C 12.91 3 12 3.91 12 5 L 12 6 L 9 6 L 9 5 L 7 5 L 7 6 L 5 6 C 3.91 6 3 6.91 3 8 L 3 24 C 3 25.09 3.91 26 5 26 L 27 26 C 28.09 26 29 25.09 29 24 L 29 8 C 29 6.91 28.09 6 27 6 L 25 6 L 25 5 L 23 5 L 23 6 L 20 6 L 20 5 C 20 3.91 19.09 3 18 3 Z M 14 5 L 18 5 L 18 6 L 14 6 Z M 5 8 L 27 8 L 27 24 L 25 24 L 25 9 L 23 9 L 23 24 L 9 24 L 9 9 L 7 9 L 7 24 L 5 24 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSuitcaseSolid;
