import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-business-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBusinessCenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 17H9v-1H5v3h14v-3h-4zM4 14h5v-3h6v3h5V9H4z","opacity":".3"}],["path",{"d":"M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 0.9-2 2v5c0 0.750.4 1.38 1 1.73V19c0 1.110.89 2 2 2h14c1.11 0 2-0.89 2-2v-3.28c0.59-0.35 1-0.99 1-1.72V9c0-1.1-0.9-2-2-2zM10 5h4v2h-4V5zm9 14H5v-3h4v1h6v-1h4v3zm-8-4v-2h2v2h-2zm9-1h-5v-3H9v3H4V9h16v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBusinessCenter;
