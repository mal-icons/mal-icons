import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-weight-hanging-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWeightHangingSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5 C 14.36 5 13 6.36 13 8 C 13 8.35 13.07 8.68 13.19 9 L 8.19 9 L 8.03 9.81 L 5.03 24.81 L 5 24.91 L 5 27 L 27 27 L 27 24.91 L 26.97 24.81 L 23.97 9.81 L 23.81 9 L 18.81 9 C 18.93 8.68 19 8.35 19 8 C 19 6.36 17.64 5 16 5 Z M 16 7 C 16.56 7 17 7.44 17 8 C 17 8.56 16.56 9 16 9 C 15.44 9 15 8.56 15 8 C 15 7.44 15.44 7 16 7 Z M 9.81 11 L 22.19 11 L 25 25 L 7 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWeightHangingSolid;
