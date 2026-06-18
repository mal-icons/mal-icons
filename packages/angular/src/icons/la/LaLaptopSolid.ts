import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-laptop-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaLaptopSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 6 L 5 19.56 L 2.72 21.88 C 2.27 22.33 2 22.95 2 23.59 C 2 24.91 3.09 26 4.41 26 L 27.59 26 C 28.91 26 30 24.91 30 23.59 C 30 22.95 29.73 22.33 29.28 21.88 L 27 19.56 L 27 6 Z M 7 8 L 25 8 L 25 19 L 7 19 Z M 6.44 21 L 25.56 21 L 27.88 23.28 C 27.95 23.36 28 23.48 28 23.59 C 28 23.84 27.84 24 27.59 24 L 4.41 24 C 4.16 24 4 23.84 4 23.59 C 4 23.48 4.05 23.36 4.13 23.28 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaLaptopSolid;
