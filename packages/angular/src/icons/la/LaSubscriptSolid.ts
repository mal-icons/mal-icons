import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-subscript-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSubscriptSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4.16 8 L 5.16 9.53 L 9.31 16 L 5.16 22.47 L 4.16 24 L 10.53 24 L 10.84 23.53 L 12.5 20.97 L 14.16 23.53 L 14.47 24 L 20.84 24 L 19.84 22.47 L 15.69 16 L 19.84 9.53 L 20.84 8 L 14.47 8 L 14.16 8.47 L 12.5 11.03 L 10.84 8.47 L 10.53 8 Z M 7.81 10 L 9.47 10 L 11.66 13.44 L 12.5 14.75 L 13.34 13.44 L 15.53 10 L 17.19 10 L 13.66 15.47 L 13.31 16 L 13.66 16.53 L 17.19 22 L 15.53 22 L 13.34 18.56 L 12.5 17.25 L 11.66 18.56 L 9.47 22 L 7.81 22 L 11.34 16.53 L 11.69 16 L 11.34 15.47 Z M 24.97 19 C 23.34 19 22 20.34 22 21.97 L 22 22 L 24 22 L 24 21.97 C 24 21.42 24.42 21 24.97 21 L 25.03 21 C 25.58 21 26 21.42 26 21.97 C 26 22.29 25.86 22.57 25.59 22.75 L 23.47 24.22 C 22.55 24.85 22 25.89 22 27 L 22 28 L 28 28 L 28 26 L 24.53 26 C 24.57 25.97 24.55 25.9 24.59 25.88 L 26.72 24.41 C 27.52 23.85 28 22.95 28 21.97 C 28 20.34 26.66 19 25.03 19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSubscriptSolid;
