import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-skip-previous",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSkipPrevious {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 6c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1s-1-0.45-1-1V7c0-0.550.45-1 1-1zm3.66 6.82 5.77 4.07c0.660.47 1.58-0.01 1.58-0.82V7.93c0-0.81-0.91-1.28-1.58-0.82l-5.77 4.07a1 1 0 0 0 0 1.64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSkipPrevious;
