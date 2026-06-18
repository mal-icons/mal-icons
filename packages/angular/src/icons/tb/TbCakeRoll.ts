import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cake-roll",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCakeRoll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 15c-4.97 0 -9 -2.46 -9 -5.5s4.03 -5.5 9 -5.5s9 2.46 9 5.5s-4.03 5.5 -9 5.5"}],["path",{"d":"M12 6.97c3 0 4 1.04 4 1.98c0 2.81 -8 2.97 -8 -0.99c0 -2.11 1.5 -3.96 4 -3.96"}],["path",{"d":"M21 9.33v5.33c0 2.95 -4.03 5.33 -9 5.33c-4.97 0 -9 -2.39 -9 -5.33v-5.33"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCakeRoll;
