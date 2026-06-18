import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-address-book-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAddressBookOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.57 3.4c-0.36 0.37 -0.87 0.6 -1.43 0.6h-10a2 2 0 0 1 -2 -2v-12"}],["path",{"d":"M10 16h6"}],["path",{"d":"M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2"}],["path",{"d":"M4 8h3"}],["path",{"d":"M4 12h3"}],["path",{"d":"M4 16h3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAddressBookOff;
