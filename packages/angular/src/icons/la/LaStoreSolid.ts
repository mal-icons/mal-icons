import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-store-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaStoreSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 7.66 L 1 11.66 L 1 12 C 1 13.65 2.36 15 4 15 L 4 28 L 28 28 L 28 15 C 29.65 15 31 13.65 31 12 L 31 11.66 L 28 7.66 L 28 4 L 4 4 z M 6 6 L 26 6 L 26 7 L 6 7 L 6 6 z M 5.5 9 L 26.5 9 L 28.91 12.22 C 28.8 12.65 28.47 13 28 13 C 27.45 13 27 12.56 27 12 L 25 12 C 25 12.56 24.56 13 24 13 C 23.45 13 23 12.56 23 12 L 21 12 C 21 12.56 20.56 13 20 13 C 19.45 13 19 12.56 19 12 L 17 12 C 17 12.56 16.56 13 16 13 C 15.45 13 15 12.56 15 12 L 13 12 C 13 12.56 12.56 13 12 13 C 11.45 13 11 12.56 11 12 L 9 12 C 9 12.56 8.56 13 8 13 C 7.45 13 7 12.56 7 12 L 5 12 C 5 12.56 4.56 13 4 13 C 3.53 13 3.2 12.65 3.09 12.22 L 5.5 9 z M 6 14.22 C 6.53 14.7 7.23 15 8 15 C 8.77 15 9.47 14.7 10 14.22 C 10.53 14.7 11.23 15 12 15 C 12.77 15 13.47 14.7 14 14.22 C 14.53 14.7 15.23 15 16 15 C 16.77 15 17.47 14.7 18 14.22 C 18.53 14.7 19.23 15 20 15 C 20.77 15 21.47 14.7 22 14.22 C 22.53 14.7 23.23 15 24 15 C 24.77 15 25.47 14.7 26 14.22 L 26 21 L 6 21 L 6 14.22 z M 6 23 L 26 23 L 26 26 L 6 26 L 6 23 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaStoreSolid;
