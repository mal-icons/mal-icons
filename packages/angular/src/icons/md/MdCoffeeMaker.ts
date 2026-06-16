import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-coffee-maker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdCoffeeMaker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 6V4h2V2H6c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.640.81 3.09 2.03 4H6V4h2v2c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1zm-8 10v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3z"}],["circle",{"cx":"13","cy":"9","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdCoffeeMaker;
