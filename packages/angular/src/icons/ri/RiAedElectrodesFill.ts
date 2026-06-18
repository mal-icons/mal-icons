import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-aed-electrodes-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAedElectrodesFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 3C7.45 3 7 3.45 7 4V7H4C3.45 7 3 7.45 3 8V20C3 20.55 3.45 21 4 21H9V23H11V21H16C16.55 21 17 20.55 17 20V17H20C20.55 17 21 16.55 21 16V4C21 3.45 20.55 3 20 3H8ZM17 15V8C17 7.45 16.55 7 16 7H9V5H19V15H17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAedElectrodesFill;
