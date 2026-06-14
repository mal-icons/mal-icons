import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-reply-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcReply24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.53 5.03a0.750.75 0 1 0-1.06-1.06l-6.25 6.25a0.750.75 0 0 0 0 1.06l6.25 6.25a0.750.75 0 1 0 1.06-1.06L5.56 11.5H17a3.25 3.25 0 0 1 3.25 3.25v4.5a0.750.75 0 0 0 1.5 0v-4.5A4.75 4.75 0 0 0 17 10H5.56l4.97-4.97Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcReply24;
