import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-turned-in",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTurnedIn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 3H7c-1.1 0-1.990.9-1.99 2L5 21l7-3 7 3V5c0-1.1-0.9-2-2-2zm0 14.97-4.21-1.81-0.79-0.34-0.790.34L7 17.97V5h10v12.97z"}],["path",{"d":"m7 17.97 4.21-1.810.79-0.340.790.34L17 17.97V5H7z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTurnedIn;
