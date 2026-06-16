import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-comment-bank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCommentBank {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v15.59c0 0.89 1.08 1.34 1.710.71L6 18h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-1.76 9.55L16.5 10.5l-1.74 1.05c-0.330.2-0.76-0.04-0.76-0.43V4h5v7.12a0.50.5 0 0 1-0.760.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCommentBank;
