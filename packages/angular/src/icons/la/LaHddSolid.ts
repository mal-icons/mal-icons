import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hdd-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHddSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6.22 6 L 3 18.88 L 3 26 L 29 26 L 29 18.88 L 25.78 6 Z M 7.78 8 L 24.22 8 L 26.72 18 L 5.28 18 Z M 5 20 L 27 20 L 27 24 L 5 24 Z M 24 21 C 23.45 21 23 21.45 23 22 C 23 22.55 23.45 23 24 23 C 24.55 23 25 22.55 25 22 C 25 21.45 24.55 21 24 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHddSolid;
