import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-blackberry",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBlackberry {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 16 5 C 22.09 5 27 9.91 27 16 C 27 22.09 22.09 27 16 27 C 9.91 27 5 22.09 5 16 C 5 9.91 9.91 5 16 5 Z M 9.72 11 L 9.13 13.69 L 11.28 13.69 C 12.95 13.69 13.44 12.92 13.44 12.19 C 13.44 11.67 13.12 11 11.78 11 Z M 15.25 11 L 14.66 13.69 L 16.81 13.69 C 18.48 13.69 18.97 12.92 18.97 12.19 C 18.97 11.67 18.64 11 17.31 11 Z M 20.31 13.41 L 19.72 16.13 L 21.84 16.13 C 23.52 16.13 24 15.33 24 14.59 C 24 14.07 23.68 13.41 22.34 13.41 Z M 8.97 15.06 L 8.41 17.78 L 10.53 17.78 C 12.2 17.78 12.69 16.98 12.69 16.25 C 12.69 15.73 12.37 15.06 11.03 15.06 Z M 14.5 15.06 L 13.94 17.78 L 16.06 17.78 C 17.73 17.78 18.22 16.98 18.22 16.25 C 18.22 15.73 17.89 15.06 16.56 15.06 Z M 19.5 17.66 L 18.91 20.34 L 21.06 20.34 C 22.73 20.34 23.19 19.55 23.19 18.81 C 23.19 18.29 22.89 17.66 21.56 17.66 Z M 13.72 19.31 L 13.13 22 L 15.28 22 C 16.95 22 17.41 21.2 17.41 20.47 C 17.41 19.95 17.11 19.31 15.78 19.31 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBlackberry;
