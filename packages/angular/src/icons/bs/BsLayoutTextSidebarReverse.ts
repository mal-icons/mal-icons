import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-layout-text-sidebar-reverse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLayoutTextSidebarReverse {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 3a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1 0-1zm0 3a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1 0-1zm0.5 3.5a0.50.5 0 0 0-0.5-0.5h-5a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0.5-0.5m-0.5 2.5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1 0-1z"}],["path",{"d":"M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLayoutTextSidebarReverse;
