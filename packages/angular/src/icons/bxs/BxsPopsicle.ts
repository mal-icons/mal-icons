import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-popsicle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPopsicle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4a7 7 0 0 0-9.9 0l-7.82 7.82a1 1 0 0 0 0 1.41l3.54 3.54-3.54 3.53 1.42 1.42 3.53-3.54 3.54 3.54a1 1 0 0 0 1.41 0L20 13.94A7 7 0 0 0 20 4zm-2.7 2.7a3.33 3.33 0 0 0-4.6 0l-1.06-1.06a4.76 4.76 0 0 1 6.72 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPopsicle;
