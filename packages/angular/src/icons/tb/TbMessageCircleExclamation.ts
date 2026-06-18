import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-message-circle-exclamation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMessageCircleExclamation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.02 19.52c-2.34 0.74 -5 0.61 -7.32 -0.52l-4.7 1l1.3 -3.9c-2.32 -3.44 -1.43 -7.87 2.1 -10.37c3.53 -2.5 8.59 -2.3 11.85 0.48c1.96 1.67 2.9 3.96 2.76 6.23"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMessageCircleExclamation;
