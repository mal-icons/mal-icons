import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dice-d20-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDiceD20Solid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3.72 L 15.38 4.22 L 7.13 10.63 L 6.88 10.84 L 6.78 11.16 L 4.03 21.25 L 3.81 22.03 L 16 28.13 L 28.19 22.03 L 27.97 21.25 L 25.22 11.16 L 25.13 10.84 L 24.88 10.63 L 16.63 4.22 Z M 15 7.06 L 15 10 L 11.22 10 Z M 17 7.06 L 20.78 10 L 17 10 Z M 9.06 12 L 14 12 L 10.41 16.78 Z M 18 12 L 22.94 12 L 21.59 16.78 Z M 16 12.69 L 20 18 L 12 18 Z M 7.81 15 L 8.81 18.5 L 6.56 19.63 Z M 24.19 15 L 25.44 19.63 L 23.19 18.5 Z M 12 20 L 20 20 L 16 25.31 Z M 9.69 20.28 L 12.63 24.19 L 7.25 21.5 Z M 22.31 20.28 L 24.75 21.5 L 19.38 24.19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDiceD20Solid;
