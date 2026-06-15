import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-insert-before",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgInsertBefore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 5C3 5.55 3.45 6 4 6H20C20.55 6 21 5.55 21 5C21 4.45 20.55 4 20 4H4C3.45 4 3 4.45 3 5Z","fill":"currentColor"}],["path",{"d":"M12 20C12.55 20 13 19.55 13 19V16H16C16.55 16 17 15.55 17 15C17 14.45 16.55 14 16 14H13V11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11V14H8C7.45 14 7 14.45 7 15C7 15.55 7.45 16 8 16H11V19C11 19.55 11.45 20 12 20Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgInsertBefore;
