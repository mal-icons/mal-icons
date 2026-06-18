import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-tachometer-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTachometerAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 6 C 9.38 6 4 11.38 4 18 C 4 20.89 5.04 23.55 6.75 25.63 L 7.03 26 L 24.97 26 L 25.25 25.63 C 26.96 23.55 28 20.89 28 18 C 28 11.38 22.62 6 16 6 Z M 16 8 C 21.54 8 26 12.46 26 18 C 26 20.27 25.21 22.32 23.94 24 L 8.06 24 C 6.79 22.32 6 20.27 6 18 C 6 12.46 10.46 8 16 8 Z M 16 9 C 15.45 9 15 9.45 15 10 C 15 10.55 15.45 11 16 11 C 16.55 11 17 10.55 17 10 C 17 9.45 16.55 9 16 9 Z M 12 10.06 C 11.45 10.06 11 10.51 11 11.06 C 11 11.61 11.45 12.06 12 12.06 C 12.55 12.06 13 11.61 13 11.06 C 13 10.51 12.55 10.06 12 10.06 Z M 20 10.06 C 19.45 10.06 19 10.51 19 11.06 C 19 11.61 19.45 12.06 20 12.06 C 20.55 12.06 21 11.61 21 11.06 C 21 10.51 20.55 10.06 20 10.06 Z M 9.06 13 C 8.51 13 8.06 13.45 8.06 14 C 8.06 14.55 8.51 15 9.06 15 C 9.61 15 10.06 14.55 10.06 14 C 10.06 13.45 9.61 13 9.06 13 Z M 22.66 13.03 L 17 16.28 C 16.71 16.11 16.36 16 16 16 C 14.89 16 14 16.89 14 18 C 14 19.11 14.89 20 16 20 C 17.09 20 17.98 19.12 18 18.03 C 18 18.02 18 18.01 18 18 L 23.66 14.78 Z M 8 17 C 7.45 17 7 17.45 7 18 C 7 18.55 7.45 19 8 19 C 8.55 19 9 18.55 9 18 C 9 17.45 8.55 17 8 17 Z M 24 17 C 23.45 17 23 17.45 23 18 C 23 18.55 23.45 19 24 19 C 24.55 19 25 18.55 25 18 C 25 17.45 24.55 17 24 17 Z M 9.06 21 C 8.51 21 8.06 21.45 8.06 22 C 8.06 22.55 8.51 23 9.06 23 C 9.61 23 10.06 22.55 10.06 22 C 10.06 21.45 9.61 21 9.06 21 Z M 22.94 21 C 22.39 21 21.94 21.45 21.94 22 C 21.94 22.55 22.39 23 22.94 23 C 23.49 23 23.94 22.55 23.94 22 C 23.94 21.45 23.49 21 22.94 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTachometerAltSolid;
