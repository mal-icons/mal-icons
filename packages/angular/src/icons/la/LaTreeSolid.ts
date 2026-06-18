import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-tree-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTreeSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3.59 L 15.28 4.28 L 9.34 10.25 L 8.34 11.22 L 9.63 11.84 C 9.63 11.84 10.64 12.21 12.06 12.53 L 7.66 16.94 L 6.66 17.91 L 7.91 18.53 C 7.91 18.53 8.98 18.84 9.53 19.03 L 5.94 22.63 L 4.97 23.63 L 6.22 24.25 C 6.22 24.25 8.66 25.43 13 25.84 L 13 29 L 15 29 L 15 25.97 C 15.34 25.98 15.65 26 16 26 C 16.35 26 16.66 25.98 17 25.97 L 17 29 L 19 29 L 19 25.84 C 23.35 25.43 25.81 24.25 25.81 24.25 L 27.03 23.63 L 26.06 22.63 L 22.47 19.03 C 23.02 18.84 24.09 18.53 24.09 18.53 L 25.34 17.91 L 24.34 16.94 L 19.94 12.53 C 21.36 12.21 22.38 11.84 22.38 11.84 L 23.66 11.22 L 22.66 10.25 L 16.72 4.28 Z M 16 6.44 L 20 10.41 C 19.41 10.61 19.29 10.76 17.81 10.91 L 16 11.09 L 14.19 10.91 C 12.71 10.76 12.59 10.61 12 10.41 Z M 16 11.44 L 17.19 12.59 L 21.78 17.19 C 21.32 17.35 21.33 17.41 20.38 17.59 L 18.53 17.97 L 19.88 19.28 L 23.53 22.94 C 22.26 23.39 20.08 24 16 24 C 11.96 24 9.79 23.39 8.5 22.94 L 12.13 19.28 L 13.47 17.97 L 11.63 17.59 C 10.67 17.41 10.68 17.35 10.22 17.19 L 14.81 12.59 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTreeSolid;
