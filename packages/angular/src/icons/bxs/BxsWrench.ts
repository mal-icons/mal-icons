import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-wrench",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsWrench {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.51 6.11-3.89 3.89-3.53-3.54 3.89-3.89a6.5 6.5 0 0 0-8.48 8.49l-6.28 6.28a11 0 0 0 0 1.41l2.12 2.12a11 0 0 0 1.41 0l6.28-6.28a6.5 6.5 0 0 0 7.07-1.41 6.5 6.5 0 0 0 1.41-7.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsWrench;
