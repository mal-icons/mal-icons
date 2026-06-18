import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-tag-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxTagAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.87 4.5A1 1 0 0 0 17 4H3a1 1 0 0 0-0.87 1.5L5.85 12l-3.72 6.5A1 1 0 0 0 3 20h14a1 1 0 0 0 0.87-0.5l4-7a11 0 0 0 0-0.99l-4-7zM16.42 18H4.72l3.15-5.5a11 0 0 0 0-0.99L4.72 6H16.42l3.43 6-3.43 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxTagAlt;
