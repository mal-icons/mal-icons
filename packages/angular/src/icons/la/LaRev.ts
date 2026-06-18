import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-rev",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRev {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 3 L 15 5.05 C 9.4 5.56 5 10.27 5 16 C 5 22.07 9.94 27 16 27 L 27 27 L 27 16 C 27 12.63 25.48 9.62 23.09 7.6 L 21.22 8.69 C 23.5 10.32 25 12.99 25 16 C 25 20.96 20.96 25 16 25 C 11.04 25 7 20.96 7 16 C 7 11.38 10.51 7.56 15 7.06 L 15 10 L 21 6.5 L 15 3 z M 16 13 A 3 3 0 0 0 16 19 A 3 3 0 0 0 16 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRev;
