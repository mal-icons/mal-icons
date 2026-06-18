import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-wallet-3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWallet3Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 6H15C11.69 6 9 8.69 9 12C9 15.31 11.69 18 15 18H22V20C22 20.55 21.56 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21C21.56 3 22 3.45 22 4V6ZM15 8H23V16H15C12.8 16 11 14.21 11 12C11 9.79 12.8 8 15 8ZM15 11V13H18V11H15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWallet3Fill;
