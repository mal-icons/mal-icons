import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cart-x-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCartXFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.5 1a0.50.5 0 0 0 0 1h1.11l0.4 1.61 1.5 7.99A0.50.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a0.50.5 0 0 0 0.49-0.41l1.5-8A0.50.5 0 0 0 14.5 3H2.89l-0.4-1.62A0.50.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.35 5.65 8.5 6.79l1.15-1.15a0.50.5 0 0 1 0.710.71L9.21 7.5l1.15 1.15a0.50.5 0 0 1-0.710.71L8.5 8.21 7.35 9.35a0.50.5 0 1 1-0.71-0.71L7.79 7.5 6.65 6.35a0.50.5 0 1 1 0.71-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCartXFill;
