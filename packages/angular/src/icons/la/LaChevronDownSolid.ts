import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chevron-down-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChevronDownSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6.91 6.59 L 6.19 7.28 L 2.28 11.19 L 1.59 11.91 L 16 26.31 L 30.41 11.91 L 29.72 11.19 L 25.81 7.28 L 25.09 6.59 L 16 15.69 Z M 6.88 9.44 L 15.28 17.81 L 16 18.5 L 16.72 17.81 L 25.13 9.44 L 27.56 11.88 L 16 23.47 L 4.44 11.88 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChevronDownSolid;
