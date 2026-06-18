import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-rocketchat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRocketchat {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7.55 5 C 6.26 5 5.06 5.31 4 5.85 C 5.42 6.97 6.43 8.53 6.84 10.3 C 5.07 11.85 4 13.84 4 16 C 4 18.1 5 20.11 6.84 21.72 C 6.55 22.97 5.95 24.13 5.08 25.12 L 4.01 26.35 L 5.59 26.75 C 6.23 26.92 6.89 27 7.55 27 C 9.78 27 11.84 26.2 13.42 24.73 C 14.43 24.91 15.46 25 16.5 25 C 23.39 25 29 20.96 29 16 C 29 11.04 23.39 7 16.5 7 C 15.44 7 14.42 7.11 13.44 7.29 C 11.91 5.88 9.84 5 7.55 5 z M 16.5 9 C 22.29 9 27 12.14 27 16 C 27 19.86 22.29 23 16.5 23 C 15.41 23 14.34 22.89 13.31 22.67 L 12.76 22.55 L 12.37 22.96 C 11.15 24.25 9.47 24.98 7.64 25 C 8.29 23.92 8.73 22.72 8.92 21.48 L 9.01 20.9 L 8.55 20.54 C 6.91 19.26 6 17.65 6 16 C 6 12.14 10.71 9 16.5 9 z M 11.5 15 A 1.5 1.5 0 0 0 11.5 18 A 1.5 1.5 0 0 0 11.5 15 z M 16.5 15 A 1.5 1.5 0 0 0 16.5 18 A 1.5 1.5 0 0 0 16.5 15 z M 21.5 15 A 1.5 1.5 0 0 0 21.5 18 A 1.5 1.5 0 0 0 21.5 15 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRocketchat;
