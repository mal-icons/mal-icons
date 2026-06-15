import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-comment-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCommentCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.86 12C3.38 12 3 11.61 3 11.14V9H2C0.9 9 0 8.1 0 7V2C0 0.9 0.9 0 2 0H10C11.1 0 12 0.9 12 2V7C12 8.1 11.1 9 10 9H7.57L4.44 11.78C4.28 11.92 4.08 12 3.87 12H3.86ZM2 1C1.45 1 1 1.45 1 2V7C1 7.55 1.45 8 2 8H4V10.88L7.18 8H10C10.55 8 11 7.55 11 7V2C11 1.45 10.55 1 10 1H2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCommentCompact;
