import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-comment-edit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCommentEdit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.77 9.12-1.4-1.4-3.87 3.86v1.4h1.4zM14.1 6l1.4 1.4-1.07 1.07-1.4-1.4z"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v18l5.33-4H20c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H6.67L4 18V4h16v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCommentEdit;
