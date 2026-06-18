import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-reply-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaReplySolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 12.28 5.28 L 4.28 13.28 L 3.59 14 L 4.28 14.72 L 12.28 22.72 L 13.72 21.28 L 7.44 15 L 21 15 C 23.77 15 26 17.23 26 20 C 26 22.77 23.77 25 21 25 L 21 27 C 24.86 27 28 23.86 28 20 C 28 16.14 24.86 13 21 13 L 7.44 13 L 13.72 6.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaReplySolid;
