import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cart-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCartPlus {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 5.5a0.50.5 0 0 0-1 0V7H6.5a0.50.5 0 0 0 0 1H8v1.5a0.50.5 0 0 0 1 0V8h1.5a0.50.5 0 0 0 0-1H9z"}],["path",{"d":"M0.5 1a0.50.5 0 0 0 0 1h1.11l0.4 1.61 1.5 7.99A0.50.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a0.50.5 0 0 0 0.49-0.41l1.5-8A0.50.5 0 0 0 14.5 3H2.89l-0.4-1.62A0.50.5 0 0 0 2 1zm3.92 10L3.1 4h10.8l-1.31 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCartPlus;
