import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrow-long-right-e",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowLongRightE {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M22.99 11.99L18.75 16.24L17.33 14.83L19.15 13.01L7.03 13.05L7.04 15.05L1.04 15.08L1.01 9.08L7.01 9.05L7.02 11.05L19.17 11.01L17.32 9.17L18.74 7.76L22.99 11.99ZM3.02 11.07L3.03 13.07L5.03 13.06L5.02 11.06L3.02 11.07Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowLongRightE;
