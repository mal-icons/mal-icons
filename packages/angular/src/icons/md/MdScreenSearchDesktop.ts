import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-screen-search-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdScreenSearchDesktop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 18h16c1.1 0 1.99-0.9 1.99-2L22 5c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2zM4 5h16v11H4V5zM1 19h22v2H1z"}],["path",{"d":"M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.360.47l2.09 2.09 1.06-1.06-2.09-2.09c0.87-1.360.72-3.18-0.47-4.36zm-1.06 3.88c-0.780.78-2.050.78-2.83 0-0.78-0.78-0.78-2.05 0-2.83s2.05-0.78 2.83 0c0.780.790.78 2.05 0 2.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdScreenSearchDesktop;
