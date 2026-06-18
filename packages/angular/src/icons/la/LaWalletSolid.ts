import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-wallet-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWalletSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 22.97 4 C 22.82 4 22.66 4.02 22.5 4.06 L 6.25 8.34 C 4.94 8.69 4 9.89 4 11.25 L 4 25 C 4 26.64 5.36 28 7 28 L 25 28 C 26.64 28 28 26.64 28 25 L 28 12 C 28 10.36 26.64 9 25 9 L 11.63 9 L 23 6 L 23 8 L 25 8 L 25 6 C 25 4.88 24.04 3.98 22.97 4 Z M 7 11 L 25 11 C 25.57 11 26 11.43 26 12 L 26 25 C 26 25.57 25.57 26 25 26 L 7 26 C 6.43 26 6 25.57 6 25 L 6 12 C 6 11.43 6.43 11 7 11 Z M 22.5 17 C 21.67 17 21 17.67 21 18.5 C 21 19.33 21.67 20 22.5 20 C 23.33 20 24 19.33 24 18.5 C 24 17.67 23.33 17 22.5 17 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWalletSolid;
