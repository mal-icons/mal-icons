import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-expand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxExpand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21 15.34-2.12 2.12-3.17-3.17-1.41 1.41 3.17 3.17L15.34 21H21zM3 8.66l2.12-2.12 3.17 3.17 1.41-1.41-3.17-3.17L8.66 3H3zM21 3h-5.66l2.12 2.12-3.17 3.17 1.41 1.41 3.17-3.17L21 8.66zM3 21h5.66l-2.12-2.12 3.17-3.17-1.41-1.41-3.17 3.17L3 15.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxExpand;
