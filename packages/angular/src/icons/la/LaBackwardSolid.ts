import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-backward-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBackwardSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 17 5 L 15.41 6.19 L 3.41 15.19 L 2.34 16 L 3.41 16.81 L 15.41 25.81 L 17 27 L 17 19.63 L 25.41 25.81 L 27 26.97 L 27 5.03 L 25.41 6.19 L 17 12.38 Z M 25 8.97 L 25 23.03 L 16.59 16.84 L 15.47 16 L 16.59 15.16 Z M 15 9 L 15 23 L 5.69 16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBackwardSolid;
