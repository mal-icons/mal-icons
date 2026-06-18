import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-rainbow-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRainbowSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5 C 8.28 5 2 11.28 2 19 L 2 27 L 4 27 L 4 19 C 4 12.38 9.38 7 16 7 C 22.62 7 28 12.38 28 19 L 28 27 L 30 27 L 30 19 C 30 11.28 23.72 5 16 5 z M 16 9 C 10.49 9 6 13.49 6 19 L 6 27 L 8 27 L 8 19 C 8 14.59 11.59 11 16 11 C 20.41 11 24 14.59 24 19 L 24 27 L 26 27 L 26 19 C 26 13.49 21.51 9 16 9 z M 16 13 C 12.69 13 10 15.69 10 19 L 10 27 L 12 27 L 12 19 C 12 16.79 13.79 15 16 15 C 18.21 15 20 16.79 20 19 L 20 27 L 22 27 L 22 19 C 22 15.69 19.31 13 16 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRainbowSolid;
