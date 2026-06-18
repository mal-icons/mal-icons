import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-grin-beam-sweat-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGrinBeamSweatSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 13.95 28.51 12.01 27.66 10.28 C 27.36 10.99 26.86 11.59 26.26 12.05 C 26.73 13.28 27 14.61 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 C 17.35 5 18.64 5.26 19.84 5.7 C 20.1 5.11 20.4 4.5 20.71 3.9 C 19.25 3.33 17.66 3 16 3 z M 23.5 3 C 23.5 3 21 7.27 21 8.6 C 21 9.92 22.12 11 23.5 11 C 24.88 11 26 9.92 26 8.6 C 26 7.27 23.5 3 23.5 3 z M 9 14 L 9 16 L 14 16 L 14 14 L 9 14 z M 18 14 L 18 16 L 23 16 L 23 14 L 18 14 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGrinBeamSweatSolid;
