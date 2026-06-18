import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-kiss-beam",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaKissBeam {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 11 12 C 8.91 12 7.39 13.21 7.39 13.21 L 8.61 14.79 C 8.61 14.79 9.69 14 11 14 C 12.31 14 13.39 14.79 13.39 14.79 L 14.61 13.21 C 14.61 13.21 13.09 12 11 12 z M 21 12 C 18.91 12 17.39 13.21 17.39 13.21 L 18.61 14.79 C 18.61 14.79 19.69 14 21 14 C 22.31 14 23.39 14.79 23.39 14.79 L 24.61 13.21 C 24.61 13.21 23.09 12 21 12 z M 15 17.01 L 15 18.5 C 15.9 18.5 16.48 18.91 16.48 19.13 C 16.48 19.34 15.9 19.75 15.01 19.76 C 15.01 19.76 15 19.76 15 19.76 L 15 19.76 L 15 21.25 L 15 21.25 C 15 21.25 15.01 21.25 15.01 21.25 C 15.91 21.25 16.48 21.66 16.48 21.88 C 16.48 22.09 15.9 22.51 15 22.51 L 15 24 C 16.67 24 17.98 23.07 17.98 21.88 C 17.98 21.35 17.7 20.87 17.27 20.5 C 17.7 20.14 17.98 19.66 17.98 19.13 C 17.98 17.94 16.67 17.01 15 17.01 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaKissBeam;
