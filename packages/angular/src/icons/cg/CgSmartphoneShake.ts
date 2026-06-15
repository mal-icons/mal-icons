import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-smartphone-shake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgSmartphoneShake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 14H11V16H13V14Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 7C8 5.9 8.9 5 10 5H14C15.1 5 16 5.9 16 7V17C16 18.1 15.1 19 14 19H10C8.9 19 8 18.1 8 17V7ZM10 7H14V17H10V7Z","fill":"currentColor"}],["path",{"d":"M18 9H20V15H18V9Z","fill":"currentColor"}],["path",{"d":"M0 14H2V10H0V14Z","fill":"currentColor"}],["path",{"d":"M6 15H4V9H6V15Z","fill":"currentColor"}],["path",{"d":"M24 10H22V14H24V10Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgSmartphoneShake;
