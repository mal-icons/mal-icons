import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-sun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsSun {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 12c0 2.76 2.25 5.01 5.01 5.01s5.01-2.25 5.01-5.01-2.25-5.01-5.01-5.01S7 9.24 7 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.64 19.78l-1.41-1.41 2.12-2.12 1.41 1.41zM16.24 6.34l2.12-2.12 1.41 1.41-2.12 2.12zM6.34 7.76 4.22 5.64l1.42-1.41 2.12 2.12zm13.43 10.61-1.41 1.41-2.12-2.12 1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsSun;
