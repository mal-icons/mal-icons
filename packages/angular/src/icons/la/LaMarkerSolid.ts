import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-marker-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMarkerSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 23.63 3.06 L 22.91 3.69 L 7.56 17 L 7.06 17.47 L 7.31 18.13 C 7.31 18.13 8.44 21.13 6.28 23.28 L 6.28 23.31 L 6.25 23.34 L 6.09 23.53 L 5.97 23.66 L 2 27.53 L 7.38 29 L 9.44 26.94 L 9.66 26.75 L 9.69 26.72 L 9.72 26.72 C 11.88 24.56 14.88 25.69 14.88 25.69 L 15.53 25.94 L 16 25.44 L 29.31 10.09 L 29.94 9.38 Z M 23.5 5.81 L 27.19 9.5 L 18.44 19.56 L 13.44 14.56 Z M 11.94 15.88 L 17.13 21.06 L 15.19 23.31 L 9.69 17.81 Z M 9.56 20.5 L 12.5 23.44 C 11.26 23.48 9.75 23.88 8.34 25.25 C 8.32 25.27 8.3 25.26 8.28 25.28 L 8.03 25.5 L 7.5 24.97 L 7.72 24.72 L 7.75 24.66 C 9.13 23.25 9.52 21.74 9.56 20.5 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMarkerSolid;
