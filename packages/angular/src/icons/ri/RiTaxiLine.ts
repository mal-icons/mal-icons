import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-taxi-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTaxiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 11V21C22 21.55 21.55 22 21 22H20C19.45 22 19 21.55 19 21V20H5V21C5 21.55 4.55 22 4 22H3C2.45 22 2 21.55 2 21V11L4.45 6.11C4.79 5.43 5.48 5 6.24 5H9V3H15V5H17.76C18.52 5 19.21 5.43 19.55 6.11L22 11ZM20 13H4V18H20V13ZM4.24 11H19.76L17.76 7H6.24L4.24 11ZM6.5 17C5.67 17 5 16.33 5 15.5C5 14.67 5.67 14 6.5 14C7.33 14 8 14.67 8 15.5C8 16.33 7.33 17 6.5 17ZM17.5 17C16.67 17 16 16.33 16 15.5C16 14.67 16.67 14 17.5 14C18.33 14 19 14.67 19 15.5C19 16.33 18.33 17 17.5 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTaxiLine;
