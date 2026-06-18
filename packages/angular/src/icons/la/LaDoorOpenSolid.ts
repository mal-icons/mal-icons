import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-door-open-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDoorOpenSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15.88 4 L 15.78 4.03 L 7.78 5.91 L 7 6.09 L 7 26.34 L 7.81 26.47 L 15.81 27.97 L 15.91 28 L 18 28 L 18 4 Z M 20 6 L 20 8 L 23 8 L 23 24 L 20 24 L 20 26 L 25 26 L 25 6 Z M 16 6.03 L 16 26 L 9 24.69 L 9 7.66 Z M 14.34 15 C 13.98 15 13.66 15.45 13.66 16 C 13.66 16.55 13.98 17 14.34 17 C 14.71 17 15 16.55 15 16 C 15 15.45 14.71 15 14.34 15 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDoorOpenSolid;
