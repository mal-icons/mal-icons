import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-difference",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDifference {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 23H4c-1.1 0-2-0.9-2-2V7h2v14h14v2zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7h-2zm2 6h-6v2h6v-2zM15 1H8c-1.1 0-1.990.9-1.99 2L6 17c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V7l-6-6zm4 16H8V3h6.17L19 7.83V17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDifference;
