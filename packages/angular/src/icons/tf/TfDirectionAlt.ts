import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-direction-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfDirectionAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 6h4.7l1.94-2.56-1.95-2.44h-4.69v-1h-1v1h-6v5h6v2h-4.69l-1.95 2.44 1.94 2.56h4.7v4h1v-4h6v-5h-6v-2zM3 2h10.21l1.16 1.45-1.17 1.55h-10.2v-3zM14 12h-10.2l-1.17-1.55 1.16-1.45h10.21v3z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfDirectionAlt;
