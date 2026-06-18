import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-share-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShareAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 13.86 4 12.12 5.72 12.03 7.84 C 8.43 9.38 6 12.94 6 17 C 6 17.17 5.99 17.36 6 17.56 C 4.82 18.26 4 19.54 4 21 C 4 23.2 5.8 25 8 25 C 8.57 25 9.13 24.88 9.63 24.66 C 11.36 26.11 13.62 27 16 27 C 18.38 27 20.64 26.11 22.38 24.66 C 22.87 24.88 23.43 25 24 25 C 26.2 25 28 23.2 28 21 C 28 19.52 27.18 18.22 25.97 17.53 C 25.98 17.37 26 17.21 26 17 C 26 12.94 23.57 9.38 19.97 7.84 C 19.88 5.72 18.14 4 16 4 Z M 16 6 C 17.12 6 18 6.88 18 8 C 18 9.12 17.12 10 16 10 C 14.88 10 14 9.12 14 8 C 14 6.88 14.88 6 16 6 Z M 12.47 9.84 C 13.14 11.12 14.47 12 16 12 C 17.53 12 18.86 11.12 19.53 9.84 C 22.21 11.14 24 13.88 24 17 C 21.8 17 20 18.8 20 21 C 20 21.89 20.31 22.71 20.81 23.38 C 19.48 24.39 17.76 25 16 25 C 14.24 25 12.52 24.39 11.19 23.38 C 11.69 22.71 12 21.89 12 21 C 12 18.8 10.2 17 8 17 C 8 13.88 9.79 11.14 12.47 9.84 Z M 8 19 C 9.12 19 10 19.88 10 21 C 10 22.12 9.12 23 8 23 C 6.88 23 6 22.12 6 21 C 6 19.88 6.88 19 8 19 Z M 24 19 C 25.12 19 26 19.88 26 21 C 26 22.12 25.12 23 24 23 C 22.88 23 22 22.12 22 21 C 22 19.88 22.88 19 24 19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShareAltSolid;
