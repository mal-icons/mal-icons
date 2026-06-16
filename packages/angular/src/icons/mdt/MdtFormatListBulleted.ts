import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-format-list-bulleted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFormatListBulleted {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 5h14v2H7z"}],["circle",{"cx":"4","cy":"6","r":"1.5"}],["path",{"d":"M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c0.82 0 1.5-0.68 1.5-1.5s-0.67-1.5-1.5-1.5-1.50.68-1.5 1.50.68 1.5 1.5 1.5z"}],["circle",{"cx":"4","cy":"12","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFormatListBulleted;
