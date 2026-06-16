import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-deblur",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDeblur {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"6","cy":"14","r":"1"}],["circle",{"cx":"6","cy":"18","r":"1"}],["circle",{"cx":"6","cy":"10","r":"1"}],["circle",{"cx":"3","cy":"10","r":"0.5"}],["circle",{"cx":"6","cy":"6","r":"1"}],["circle",{"cx":"3","cy":"14","r":"0.5"}],["circle",{"cx":"10","cy":"21","r":"0.5"}],["circle",{"cx":"10","cy":"3","r":"0.5"}],["circle",{"cx":"10","cy":"6","r":"1"}],["circle",{"cx":"10","cy":"14","r":"1.5"}],["circle",{"cx":"10","cy":"10","r":"1.5"}],["circle",{"cx":"10","cy":"18","r":"1"}],["path",{"d":"M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"}],["path",{"d":"M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDeblur;
