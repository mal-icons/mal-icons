import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-lightbulb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaLightbulb {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 11.04 4 7 8.04 7 13 C 7 14.92 7.84 16.91 9 18.69 C 9.86 20.01 10.89 21.23 12 22.16 L 12 25 C 12 26.09 12.91 27 14 27 L 15 28 L 17 28 L 18 27 C 19.09 27 20 26.09 20 25 L 20 22.16 C 21.11 21.23 22.14 20.01 23 18.69 C 24.16 16.91 25 14.92 25 13 C 25 8.04 20.96 4 16 4 Z M 16 6 C 19.88 6 23 9.12 23 13 C 23 14.31 22.36 16.04 21.34 17.59 C 20.44 18.98 19.25 20.22 18.16 21 L 13.84 21 C 12.75 20.22 11.56 18.98 10.66 17.59 C 9.64 16.04 9 14.31 9 13 C 9 9.12 12.12 6 16 6 Z M 14.25 23 L 17.75 23 C 17.83 23.05 17.91 23.09 18 23.13 L 18 25 L 14 25 L 14 23.13 C 14.09 23.09 14.17 23.05 14.25 23 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaLightbulb;
