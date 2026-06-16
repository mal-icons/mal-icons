import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-saved-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSavedSearch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.73 13.31A6.39 6.39 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-0.48 3.81-1.27L19.59 21 21 19.59l-6.27-6.28zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}],["path",{"d":"M10.29 8.44 9.5 6l-0.79 2.44H6.25l2.01 1.59-0.77 2.47 2.01-1.53 2.01 1.53-0.77-2.47 2.01-1.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSavedSearch;
