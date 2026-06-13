import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-car-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCarSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M447.68,220.78a16.44,16.44,0,0,0-1-3.1l-48-112A16,16,0,0,0,384,96H128a16,16,0,0,0-14.71,9.7l-48,112a16.44,16.44,0,0,0-1,3.1A16.15,16.15,0,0,0,64,224V408a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V384H400v24a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V224A16.15,16.15,0,0,0,447.68,220.78ZM144,320a32,32,0,1,1,32-32A32,32,0,0,1,144,320Zm224,0a32,32,0,1,1,32-32A32,32,0,0,1,368,320ZM104.26,208l34.29-80h234.9l34.29,80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCarSharp;
