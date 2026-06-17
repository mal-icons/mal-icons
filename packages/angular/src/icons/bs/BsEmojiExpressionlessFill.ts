import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-expressionless-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiExpressionlessFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.5 6h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1m5 0h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1m-5 4h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1 0-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiExpressionlessFill;
