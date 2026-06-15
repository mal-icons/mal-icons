import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-log-in",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgLogIn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.49 20H19.49C20.59 20 21.49 19.1 21.49 18V6C21.49 4.9 20.59 4 19.49 4H15.49V6H19.49V18H15.49V20Z","fill":"currentColor"}],["path",{"d":"M10.16 17.39L8.74 15.98L12.66 12.02L3.51 12.02C2.96 12.02 2.51 11.58 2.51 11.02C2.51 10.47 2.96 10.02 3.51 10.02L12.68 10.02L8.7 6.08L10.1 4.66L16.5 10.99L10.16 17.39Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgLogIn;
