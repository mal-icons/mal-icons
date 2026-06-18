import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-trello",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlTrello {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.75 3H5.25A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3zm-7.92 13.64a1.08 1.08 0 0 1-1.08 1.08H6.42a1.08 1.08 0 0 1-1.08-1.08V6.42c0-0.60.48-1.08 1.08-1.08h3.33c0.6 0 1.080.48 1.08 1.08v10.22zm7.83-4.5a1.08 1.08 0 0 1-1.08 1.08h-3.33a1.08 1.08 0 0 1-1.08-1.08V6.42c0-0.60.48-1.08 1.08-1.08h3.33c0.6 0 1.080.48 1.08 1.08v5.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlTrello;
