import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-wallet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxWallet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 12h2v4h-2z"}],["path",{"d":"M20 7V5c0-1.1-0.9-2-2-2H5C3.35 3 2 4.35 2 6v12c0 2.2 1.79 3 3 3h15c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zM5 5h13v2H5a1 1 0 0 1 0-2zm15 14H5.01C4.55 18.99 4 18.81 4 18V8.82c0.310.110.650.19 1 0.19h15v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxWallet;
