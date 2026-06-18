import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-comment-dots-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCommentDotsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3 5 L 3 23 L 8 23 L 8 28.08 L 14.35 23 L 29 23 L 29 5 Z M 5 7 L 27 7 L 27 21 L 13.65 21 L 10 23.92 L 10 21 L 5 21 Z M 10 12 C 8.89 12 8 12.89 8 14 C 8 15.11 8.89 16 10 16 C 11.11 16 12 15.11 12 14 C 12 12.89 11.11 12 10 12 Z M 16 12 C 14.89 12 14 12.89 14 14 C 14 15.11 14.89 16 16 16 C 17.11 16 18 15.11 18 14 C 18 12.89 17.11 12 16 12 Z M 22 12 C 20.89 12 20 12.89 20 14 C 20 15.11 20.89 16 22 16 C 23.11 16 24 15.11 24 14 C 24 12.89 23.11 12 22 12 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCommentDotsSolid;
