import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-caravan-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCaravanLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.17 3C14.7 3 15.21 3.21 15.59 3.59L20.41 8.41C20.79 8.79 21 9.3 21 9.83V17H23V19L14.87 19C14.43 20.73 12.86 22 11 22C9.14 22 7.57 20.73 7.13 19L3 19C2.45 19 2 18.55 2 18V5C2 3.9 2.9 3 4 3H14.17ZM11 16C9.9 16 9 16.9 9 18C9 19.1 9.9 20 11 20C12.1 20 13 19.1 13 18C13 16.9 12.1 16 11 16ZM14.17 5H4V17L7.13 17C7.57 15.27 9.14 14 11 14C12.86 14 14.43 15.27 14.87 17L19 17V9.83L14.17 5ZM14 7V13H6V7H14ZM12 9H8V11H12V9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCaravanLine;
