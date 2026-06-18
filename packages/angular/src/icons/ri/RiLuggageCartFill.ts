import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-luggage-cart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLuggageCartFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 20C6.33 20 7 20.67 7 21.5C7 22.33 6.33 23 5.5 23C4.67 23 4 22.33 4 21.5C4 20.67 4.67 20 5.5 20ZM18.5 20C19.33 20 20 20.67 20 21.5C20 22.33 19.33 23 18.5 23C17.67 23 17 22.33 17 21.5C17 20.67 17.67 20 18.5 20ZM2.17 1.76L6 5.59V17L20 17V19H5C4.45 19 4 18.55 4 18L4 6.41L0.76 3.17L2.17 1.76ZM16 3C16.55 3 17 3.45 17 4L17 6L19.99 6C20.55 6 21 6.46 21 7V15C21 15.55 20.55 16 19.99 16H8.01C7.45 16 7 15.54 7 15V7C7 6.45 7.45 6 8.01 6L11 6L11 4C11 3.45 11.45 3 12 3H16ZM11 8H10V14H11V8ZM18 8H17V14H18V8ZM15 5H13V6H15V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLuggageCartFill;
