import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-today",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtToday {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.990.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-7 4H7v5h5v-5z"}],["path",{"d":"M5 5h14v2H5z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtToday;
