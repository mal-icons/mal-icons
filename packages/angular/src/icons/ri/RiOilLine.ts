import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-oil-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiOilLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.07 7L6 11.61V20H18V7H9.07ZM8 5H19C19.55 5 20 5.45 20 6V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V11L8 5ZM13 1H18C18.55 1 19 1.45 19 2V4H12V2C12 1.45 12.45 1 13 1ZM8 12H10V18H8V12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiOilLine;
