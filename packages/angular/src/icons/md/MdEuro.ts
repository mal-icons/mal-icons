import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-euro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdEuro {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-0.05-0.33-0.08-0.66-0.08-1s0.03-0.670.08-1H15l1-2H9.24A6.49 6.49 0 0 1 15 5.5c1.61 0 3.090.59 4.23 1.57L21 5.3A8.96 8.96 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.26 8.26 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-0.87 6-2.3l-1.78-1.77c-1.130.98-2.6 1.57-4.22 1.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdEuro;
