import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-garden-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGardenCart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-120h-80v-464l-81-196H40v-60h119l67 160h677L756-390q51 6 85 43.97 34 37.97 34 89.57Q875-200 835.93-160.5 796.86-121 740.91-121 684-121 645-160.54 606-200.07 606-256q0-20 5.5-39t16.5-35l-153-13-195 223Zm406-264 120-236-556 1 85 203 351 32Zm-426-69v272l147-168-107-10-40-94Zm479.65 268Q772-185 793.5-206.77q21.5-21.77 21.5-52.88Q815-292 793.75-313.5T740-335q-31.25 0-53.12 21.25T665-260q0 31.25 21.77 53.13Q708.55-185 739.65-185ZM686-384l-351-32 351 32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGardenCart;
