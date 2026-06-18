import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-poker-diamonds-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPokerDiamondsFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.04 10.73L11.23 1.95C11.63 1.46 12.37 1.46 12.77 1.95L19.96 10.73C20.57 11.47 20.57 12.53 19.96 13.27L12.77 22.05C12.37 22.54 11.63 22.54 11.23 22.05L4.04 13.27C3.43 12.53 3.43 11.47 4.04 10.73Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPokerDiamondsFill;
