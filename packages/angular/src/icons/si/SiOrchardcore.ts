import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-orchardcore",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOrchardcore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0m0 21.69c-5.35 0-9.69-4.34-9.69-9.69 0-5.35 4.34-9.69 9.69-9.69 5.35 0 9.69 4.34 9.69 9.69A9.69 9.69 0 0 1 12 21.69m5.78-3.96a8 8 0 0 1 0-11.3 7.99 7.99 0 0 1 0 11.31m-3.21-3.21A7.99 7.99 0 0 1 6.57 6.52a8 8 0 0 1 7.99 7.99m-8.13 3.24a8 8 0 0 1 11.31 0 8 8 0 0 1-11.3 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOrchardcore;
