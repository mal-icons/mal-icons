import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-shopping-cart-checkout",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoShoppingCartCheckout {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-574-42-42 74-74H330v-60h182l-74-74 42-42 146 146-146 146ZM289.79-80Q260-80 239-101.21q-21-21.21-21-51Q218-182 239.21-203q21.21-21 51-21Q320-224 341-202.79q21 21.21 21 51Q362-122 340.79-101q-21.21 21-51 21Zm404 0Q664-80 643-101.21q-21-21.21-21-51Q622-182 643.21-203q21.21-21 51-21Q724-224 745-202.79q21 21.21 21 51Q766-122 744.79-101q-21.21 21-51 21ZM62-820v-60h116l170 364h287.71L796-796h67L701-493q-11 19-28.56 30.5Q654.88-451 634-451H331l-56 104h491v60H284q-37.66 0-57.33-30Q207-347 224-378l64-118-148-324H62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoShoppingCartCheckout;
