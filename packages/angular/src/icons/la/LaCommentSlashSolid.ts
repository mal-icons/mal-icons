import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-comment-slash-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCommentSlashSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3.71 2.29 L 2.29 3.71 L 28.29 29.71 L 29.71 28.29 L 27.41 26 L 29 26 L 29 6 L 7.41 6 L 3.71 2.29 z M 3 7.24 L 3 26 L 12.59 26 L 16 29.41 L 19.41 26 L 21.76 26 L 19.76 24 L 18.59 24 L 16 26.59 L 13.41 24 L 5 24 L 5 9.24 L 3 7.24 z M 9.41 8 L 27 8 L 27 24 L 25.41 24 L 9.41 8 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCommentSlashSolid;
