import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-toys",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsToys {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18.72 10-2-6H7.28L5.81 8.4 4.41 7l1-1L4 4.590.59 8 2 9.41l1-1L4.59 10H2v8h2.18A3 3 0 0 0 7 20c1.3 0 2.4-0.84 2.82-2h4.37c0.41 1.16 1.51 2 2.82 2a3 3 0 0 0 2.82-2H22v-8h-3.28zM7 18c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm4-8H7.41l-0.02-0.02L8.72 6H11v4zm2 0V6h2.28l1.33 4H13zm4 8c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsToys;
