import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-purchase-tag-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPurchaseTagAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.71 2.29A11 0 0 0 11 2H6a11 0 0 0-0.710.29l-3 3A11 0 0 0 2 6v5c0 0.270.110.520.290.71l10 10a11 0 0 0 1.41 0l8-8a11 0 0 0 0-1.41l-10-10zM8.35 10a1.65 1.65 0 1 10-3.29A1.65 1.65 0 0 1 8.35 10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPurchaseTagAlt;
