import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-toggle-square-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgToggleSquareOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 9C14.45 9 14 9.45 14 10V14C14 14.55 14.45 15 15 15H19C19.55 15 20 14.55 20 14V10C20 9.45 19.55 9 19 9H15Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0 7C0 5.9 0.9 5 2 5H22C23.1 5 24 5.9 24 7V17C24 18.1 23.1 19 22 19H2C0.9 19 0 18.1 0 17V7ZM2 7H22V17H2L2 7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgToggleSquareOff;
