import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-user-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsUserPin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.73 0 3 1.27 3 3s-1.27 3-3 3c-1.73 0-3-1.27-3-3s1.27-3 3-3zM7.18 16c0.56-1.72 2.5-3 4.82-3s4.27 1.28 4.82 3H7.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsUserPin;
