import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-gift",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxGift {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 7h-1.21A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.62 0-2.7 1.48-3.4 3.09C11.41 3.57 10.27 2 8.5 2 6.57 2 5 3.57 5 5.5c0 0.60.08 1.090.21 1.5H4c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2v7c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-7c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zm-4.5-3c0.83 0 1.50.67 1.5 1.5C17 7 16.37 7 16 7h-2.48c0.51-1.58 1.25-3 1.98-3zM7 5.5C7 4.67 7.67 4 8.5 4c0.89 0 1.71 1.53 2.2 3H8c-0.37 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.09L13.02 9H20l0 2H13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxGift;
