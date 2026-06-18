import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-popsicle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPopsicle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 2a7 7 0 0 0-4.94 2l-7.78 7.82a1 1 0 0 0 0 1.41l3.54 3.54-3.54 3.53 1.42 1.42 3.53-3.54 3.54 3.54a1 1 0 0 0 1.41 0L20 13.94A7 7 0 0 0 15 2zm3.54 10.54-7.07 7.06-2.82-2.83-1.42-1.42-2.83-2.83 7.07-7.07a5 5 0 0 1 7.08 7.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPopsicle;
