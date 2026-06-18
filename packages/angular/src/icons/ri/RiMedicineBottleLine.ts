import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-medicine-bottle-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMedicineBottleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2V4H17V7C18.66 7 20 8.34 20 10V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V10C4 8.34 5.34 7 7 7V4H5V2H19ZM17 9H7C6.45 9 6 9.45 6 10V20H18V10C18 9.45 17.55 9 17 9ZM13 11V13H15V15H13L13 17H11L11 15H9V13H11V11H13ZM15 4H9V7H15V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMedicineBottleLine;
