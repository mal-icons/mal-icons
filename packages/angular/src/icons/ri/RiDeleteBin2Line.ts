import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-delete-bin-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDeleteBin2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 6H22V8H20V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V8H2V6H7V3C7 2.45 7.45 2 8 2H16C16.55 2 17 2.45 17 3V6ZM18 8H6V20H18V8ZM13.41 14L15.18 15.77L13.77 17.18L12 15.41L10.23 17.18L8.82 15.77L10.59 14L8.82 12.23L10.23 10.82L12 12.59L13.77 10.82L15.18 12.23L13.41 14ZM9 4V6H15V4H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDeleteBin2Line;
