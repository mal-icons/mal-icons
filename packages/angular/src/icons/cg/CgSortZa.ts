import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-sort-za",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgSortZa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 16C6 16.55 6.45 17 7 17H17C17.55 17 18 16.55 18 16C18 15.45 17.55 15 17 15H7C6.45 15 6 15.45 6 16Z","fill":"currentColor"}],["path",{"d":"M8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9C8.45 11 8 11.45 8 12Z","fill":"currentColor"}],["path",{"d":"M11 9C10.45 9 10 8.55 10 8C10 7.45 10.45 7 11 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9H11Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgSortZa;
