import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-think-peaks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaThinkPeaks {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15.51 2.44 L 3 24 L 5.31 24 L 15.51 6.42 L 25.63 23.8 L 29.57 17 L 27.26 17 L 25.63 19.82 L 15.51 2.44 z M 15.53 10.43 L 8.81 22 L 11.13 22 L 15.53 14.41 L 24.03 29 L 26.34 29 L 15.53 10.43 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaThinkPeaks;
