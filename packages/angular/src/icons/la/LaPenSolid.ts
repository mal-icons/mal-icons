import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-pen-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPenSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 23.91 3.97 C 22.86 3.97 21.81 4.38 21 5.19 L 5.19 21 L 5.13 21.31 L 4.03 26.81 L 3.72 28.28 L 5.19 27.97 L 10.69 26.88 L 11 26.81 L 26.81 11 C 28.44 9.38 28.44 6.81 26.81 5.19 C 26 4.38 24.95 3.97 23.91 3.97 Z M 23.91 5.88 C 24.41 5.88 24.92 6.11 25.41 6.59 C 26.38 7.57 26.38 8.62 25.41 9.59 L 24.69 10.28 L 21.72 7.31 L 22.41 6.59 C 22.89 6.11 23.4 5.88 23.91 5.88 Z M 20.31 8.72 L 23.28 11.69 L 11.19 23.78 C 10.53 22.5 9.5 21.47 8.22 20.81 Z M 6.94 22.44 C 8.14 22.92 9.08 23.86 9.56 25.06 L 6.28 25.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPenSolid;
