import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCopy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H10c-1.1 0-2 0.9-2 2v4H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-4h4c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM4 20V10h10l0 10H4zm16-6h-4v-4c0-1.1-0.9-2-2-2h-4V4h10v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCopy;
