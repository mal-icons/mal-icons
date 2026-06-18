import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-compass-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCompassSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 22.62 28 28 22.62 28 16 C 28 9.38 22.62 4 16 4 Z M 14.97 6.06 C 14.98 6.06 14.99 6.06 15 6.06 L 15 7 L 17 7 L 17 6.06 C 21.74 6.53 25.47 10.26 25.94 15 L 25 15 L 25 17 L 25.94 17 C 25.47 21.74 21.74 25.47 17 25.94 L 17 25 L 15 25 L 15 25.94 C 10.26 25.47 6.53 21.74 6.06 17 L 7 17 L 7 15 L 6.06 15 C 6.53 10.27 10.25 6.54 14.97 6.06 Z M 22.5 9.5 L 14.16 14.16 L 9.5 22.5 L 17.84 17.84 Z M 16 14.5 C 16.83 14.5 17.5 15.17 17.5 16 C 17.5 16.83 16.83 17.5 16 17.5 C 15.17 17.5 14.5 16.83 14.5 16 C 14.5 15.17 15.17 14.5 16 14.5 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCompassSolid;
