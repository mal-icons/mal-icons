import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-parking-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiParking1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Parking 1"}],["path",{"d":"M12,21.93A9.93,9.93,0,1,1,21.93,12,9.94,9.94,0,0,1,12,21.93ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}],["path",{"d":"M12.57,8.5h-1.75a0.750.75,0,0,0-0.750.75v5.74a0.50.5,0,0,0,0.50.50.50.5,0,0,0,0.5-0.5V13.5h1.5a2.5,2.5,0,0,0,0-5Zm0,4h-1.5v-3h1.5a1.5,1.5,0,0,1,0,3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiParking1;
