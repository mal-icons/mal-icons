import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-emoji-food-beverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEmojiFoodBeverage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-120v-60h639v60H160Zm0-120v-600h660q24 0 42 18t18 42v160q0 24-18 42t-42 18h-96v320H160Zm564-380h96v-160h-96v160ZM220-300h444v-480H397v33l80 65v185H276v-185l81-65v-33H220v480Zm137-480h40-40Zm85 240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEmojiFoodBeverage;
