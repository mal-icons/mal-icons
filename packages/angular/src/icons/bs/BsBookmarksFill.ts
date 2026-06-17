import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bookmarks-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBookmarksFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a0.50.5 0 0 1-0.780.42L7 13.1l-4.22 2.82A0.50.5 0 0 1 2 15.5z"}],["path",{"d":"M4.27 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a0.50.5 0 0 1-0.780.42L13 13.77V2a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBookmarksFill;
