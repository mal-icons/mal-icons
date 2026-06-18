import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-wallet-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxWalletAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3H5C3.35 3 2 4.35 2 6v12c0 1.65 1.35 3 3 3h15c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM5 19c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h15v3h-6c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h6v3H5zm15-9v4h-6v-4h6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxWalletAlt;
