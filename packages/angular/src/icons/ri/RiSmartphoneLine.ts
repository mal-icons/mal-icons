import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-smartphone-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSmartphoneLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 4V20H17V4H7ZM6 2H18C18.55 2 19 2.45 19 3V21C19 21.55 18.55 22 18 22H6C5.45 22 5 21.55 5 21V3C5 2.45 5.45 2 6 2ZM12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSmartphoneLine;
