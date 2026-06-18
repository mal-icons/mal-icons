import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-purchase-tag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPurchaseTag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.71 3.29A11 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 0.270.110.520.290.71l8 8a11 0 0 0 1.41 0l9-9a11 0 0 0 0-1.41l-8-8zM12 19.59l-7-7V5h7.59l7 7L12 19.59z"}],["circle",{"cx":"8.5","cy":"8.49","r":"1.51"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPurchaseTag;
