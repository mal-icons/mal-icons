import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-delete-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiDeleteOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM12.71 12l2.65-2.65c0.19-0.190.19-0.51 0-0.71-0.19-0.19-0.51-0.19-0.71 0l-2.65 2.65-2.65-2.65c-0.19-0.19-0.51-0.19-0.71 0-0.190.2-0.190.51 0 0.71l2.65 2.65-2.65 2.65c-0.190.2-0.190.51 0 0.710.10.10.230.150.350.15s0.26-0.050.35-0.15l2.65-2.65 2.65 2.65c0.10.10.230.150.350.15s0.26-0.050.35-0.15c0.19-0.190.19-0.51 0-0.71l-2.65-2.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiDeleteOutline;
