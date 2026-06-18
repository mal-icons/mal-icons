import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-truck-loading-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTruckLoadingSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 17 5 L 17 21.07 L 2.73 25.04 L 3.27 26.96 L 20.02 22.31 C 20.18 24.92 22.35 27 25 27 C 27.76 27 30 24.76 30 22 C 30 19.24 27.76 17 25 17 C 22.9 17 21.11 18.3 20.37 20.14 L 19 20.52 L 19 7 L 30 7 L 30 5 L 17 5 z M 12.46 9.76 L 1.92 12.79 L 4.69 22.47 L 15.24 19.45 L 12.46 9.76 z M 11.09 12.24 L 12.76 18.07 L 6.06 19.99 L 4.39 14.16 L 11.09 12.24 z M 25 19 C 26.65 19 28 20.35 28 22 C 28 23.65 26.65 25 25 25 C 23.35 25 22 23.65 22 22 C 22 20.35 23.35 19 25 19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTruckLoadingSolid;
