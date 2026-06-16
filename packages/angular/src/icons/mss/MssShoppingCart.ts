import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-shopping-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssShoppingCart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M286.79-81Q257-81 236-102.21q-21-21.21-21-51Q215-183 236-204q21.01-21 50.5-21Q316-225 337.5-203.79q21.5 21.21 21.5 51Q359-123 337.79-102q-21.21 21-51 21Zm400 0Q657-81 636-102.21q-21-21.21-21-51Q615-183 636-204q21.01-21 50.5-21Q716-225 737.5-203.79q21.5 21.21 21.5 51Q759-123 737.79-102q-21.21 21-51 21ZM235-741l110 228h288l125-228H235Zm-67 452 113-209-152-322H51v-60h117l37 79h659L671-453H324l-56 104h491v60H168Zm177-224h288-288Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssShoppingCart;
