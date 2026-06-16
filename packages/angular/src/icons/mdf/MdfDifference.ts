import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-difference",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfDifference {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 23H4c-1.1 0-2-0.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.990.9-1.99 2L6 17c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfDifference;
