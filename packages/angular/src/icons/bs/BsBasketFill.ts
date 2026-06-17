import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-basket-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBasketFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.07 1.24a0.50.5 0 0 1 0.860.51L3.38 6h9.23L10.07 1.76a0.50.5 0 1 1 0.86-0.51L13.78 6H15.5a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H0.5a0.50.5 0 0 1-0.5-0.5v-2A0.50.5 0 0 1 0.5 6h1.72zM3.5 10.5a0.50.5 0 1 0-1 0v3a0.50.5 0 0 0 1 0zm2.5 0a0.50.5 0 1 0-1 0v3a0.50.5 0 0 0 1 0zm2.5 0a0.50.5 0 1 0-1 0v3a0.50.5 0 0 0 1 0zm2.5 0a0.50.5 0 1 0-1 0v3a0.50.5 0 0 0 1 0zm2.5 0a0.50.5 0 1 0-1 0v3a0.50.5 0 0 0 1 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBasketFill;
