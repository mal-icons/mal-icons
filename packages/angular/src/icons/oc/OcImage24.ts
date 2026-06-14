import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-image-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcImage24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.75 3h14.5c0.97 0 1.750.78 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V4.75C3 3.78 3.78 3 4.75 3Zm14.5 1.5H4.75a0.250.25 0 0 0-0.250.25v14.5c0 0.140.110.250.250.25h0.19l9.82-9.82a1.75 1.75 0 0 1 2.48 0l2.26 2.26V4.75a0.250.25 0 0 0-0.25-0.25Zm0.25 9.56-3.32-3.32a0.250.25 0 0 0-0.35 0L7.06 19.5H19.25a0.250.25 0 0 0 0.25-0.25ZM8.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcImage24;
