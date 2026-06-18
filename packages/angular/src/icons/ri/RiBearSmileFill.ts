import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bear-smile-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBearSmileFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.5 2C19.99 2 22 4.01 22 6.5C22 7.86 21.4 9.07 20.45 9.9C20.81 10.86 21 11.91 21 13C21 17.97 16.97 22 12 22C7.03 22 3 17.97 3 13C3 11.91 3.19 10.86 3.55 9.9C2.6 9.07 2 7.86 2 6.5C2 4.01 4.01 2 6.5 2C8.13 2 9.55 2.86 10.34 4.15C10.88 4.05 11.43 4 12 4C12.57 4 13.12 4.05 13.66 4.15C14.45 2.86 15.87 2 17.5 2ZM10 13H8C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13H14C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBearSmileFill;
