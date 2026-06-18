import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-memory-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMemoryCard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4v16c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V8a11 0 0 0-0.29-0.71l-5-5A11 0 0 0 14 2H6c-1.1 0-2 0.9-2 2zm14 4.41L18 20H6V4h7.59L18 8.41z"}],["path",{"d":"M8 6h2v4H8zm4 0h2v4h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMemoryCard;
