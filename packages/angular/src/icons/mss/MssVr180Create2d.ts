import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-vr180-create2d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssVr180Create2d {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-242q-119-23-199.5-114T80-568q0-130 91-221t221-91q121 0 211 80t111 200h-62q-18-95-91.5-157.5T392-820q-104 0-178 74t-74 178q0 95 63.5 166.5T360-304v62Zm60 162v-460h460v460H420Zm60-60h340v-340H480v340Zm29-44h283l-89-117-72 97-57-71-65 91Zm141-126ZM396-562Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssVr180Create2d;
