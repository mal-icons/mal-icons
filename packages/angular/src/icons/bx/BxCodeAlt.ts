import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-code-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCodeAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.38 16.78 1.25-1.56L4.6 12l4.02-3.22-1.25-1.56-5 4a1 1 0 0 0 0 1.56l5 4zm9.25-9.56-1.25 1.56L19.4 12l-4.02 3.22 1.25 1.56 5-4a1 1 0 0 0 0-1.56l-5-4zm-1.65-4-4 18-1.95-0.43 4-18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCodeAlt;
