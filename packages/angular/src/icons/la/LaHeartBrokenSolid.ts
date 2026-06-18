import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-heart-broken-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHeartBrokenSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9.5 4 C 5.36 4 2 7.4 2 11.5 C 2 12.93 2.65 14.15 3.25 15.05 C 3.85 15.94 4.46 16.54 4.46 16.54 L 16 28.08 L 27.54 16.54 C 27.54 16.54 30 14.36 30 11.5 C 30 7.4 26.64 4 22.5 4 C 20.93 4 19.53 4.52 18.39 5.15 L 18.06 5.33 L 16 11 L 19.63 11 L 16 17.21 L 16 13 L 12.45 13 L 14 5.36 L 13.33 5.01 C 12.25 4.46 10.95 4 9.5 4 z M 9.5 6 C 10.28 6 11 6.31 11.71 6.6 L 10.01 15 L 14 15 L 14 21 L 16.11 21 L 22 10.89 L 22 9 L 18.86 9 L 19.65 6.82 C 20.52 6.37 21.49 6 22.5 6 C 25.54 6 28 8.5 28 11.5 C 28 13.04 26.13 15.12 26.13 15.12 L 26.13 15.12 L 16 25.25 L 5.87 15.12 L 5.87 15.12 C 5.87 15.12 5.4 14.66 4.91 13.94 C 4.43 13.21 4 12.27 4 11.5 C 4 8.5 6.46 6 9.5 6 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHeartBrokenSolid;
