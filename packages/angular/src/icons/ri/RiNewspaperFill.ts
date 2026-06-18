import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-newspaper-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNewspaperFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 22H5C3.34 22 2 20.66 2 19V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V10H22V19C22 20.66 20.66 22 19 22ZM18 12V19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19V12H18ZM5 6V12H11V6H5ZM5 13V15H15V13H5ZM5 16V18H15V16H5ZM7 8H9V10H7V8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNewspaperFill;
