import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-heavy-showers-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHeavyShowersFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 18V23H11V18H9V21H7V17.75C3.55 16.86 1 13.73 1 10C1 5.58 4.58 2 9 2C12.39 2 15.3 4.11 16.46 7.1C16.8 7.03 17.14 7 17.5 7C20.54 7 23 9.46 23 12.5C23 15.54 20.54 18 17.5 18H17V21H15V18H13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHeavyShowersFill;
