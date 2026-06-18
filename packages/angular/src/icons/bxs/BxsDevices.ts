import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-devices",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsDevices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3H7c-1.1 0-2 0.9-2 2v2H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h6c1.1 0 2-0.9 2-2h8c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM6 9h4l0 9H4V9h2zm6 8V9c0-1.1-0.9-2-2-2H7V5h11v12h-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsDevices;
