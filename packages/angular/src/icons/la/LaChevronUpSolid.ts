import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chevron-up-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChevronUpSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5.69 L 1.59 20.09 L 2.28 20.81 L 6.19 24.72 L 6.91 25.41 L 16 16.31 L 25.09 25.41 L 25.81 24.72 L 29.72 20.81 L 30.41 20.09 Z M 16 8.53 L 27.56 20.13 L 25.13 22.56 L 16.72 14.19 L 16 13.5 L 15.28 14.19 L 6.88 22.56 L 4.44 20.13 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChevronUpSolid;
