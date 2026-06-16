import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-filter-4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFilter4 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z","opacity":".3"}],["path",{"d":"M3 23h16v-2H3V5H1v16c0 1.10.9 2 2 2zm4-4h14c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2zM7 3h14v14H7V3zm8 6h-2V5h-2v6h4v4h2V5h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFilter4;
