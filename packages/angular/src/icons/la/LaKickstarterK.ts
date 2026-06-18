import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-kickstarter-k",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaKickstarterK {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 5 C 9.34 5 8 6.34 8 8 L 8 24 C 8 25.66 9.34 27 11 27 C 12.66 27 14 25.66 14 24 L 14 19.41 L 19.74 25.98 C 20.34 26.65 21.17 27 22 27 C 22.7 27 23.41 26.76 23.98 26.26 C 25.22 25.17 25.35 23.27 24.26 22.03 L 18.86 15.86 L 23.4 9.8 C 24.39 8.48 24.13 6.59 22.8 5.6 C 21.48 4.61 19.59 4.87 18.6 6.2 L 14 12.33 L 14 8 C 14 6.34 12.66 5 11 5 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaKickstarterK;
