import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-shopping-basket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssShoppingBasket {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-120 27-600h242l185-270q5-6 11-9.5t14-3.5q8 0 14 3.5t11 9.5l184 270h246L799-120H160Zm182-480h273L479-800 342-600ZM206-180h548-548Zm274-120q25 0 42.5-17.5T540-360q0-25-17.5-42.5T480-420q-25 0-42.5 17.5T420-360q0 25 17.5 42.5T480-300ZM206-180h548l101-360H106l100 360Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssShoppingBasket;
