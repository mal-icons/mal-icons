import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-error-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsErrorAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.71 2.29A11 0 0 0 16 2H8a11 0 0 0-0.710.29l-5 5A11 0 0 0 2 8v8c0 0.270.110.520.290.71l5 5A11 0 0 0 8 22h8c0.27 0 0.52-0.10.71-0.29l5-5A11 0 0 0 22 16V8a11 0 0 0-0.29-0.71l-5-5zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsErrorAlt;
