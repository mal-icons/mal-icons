import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-deblur",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDeblur {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3v18a9 9 0 0 0 0-18z"}],["circle",{"cx":"6","cy":"14","r":"1"}],["circle",{"cx":"6","cy":"18","r":"1"}],["circle",{"cx":"6","cy":"10","r":"1"}],["circle",{"cx":"3","cy":"10","r":"0.5"}],["circle",{"cx":"6","cy":"6","r":"1"}],["circle",{"cx":"3","cy":"14","r":"0.5"}],["circle",{"cx":"10","cy":"21","r":"0.5"}],["circle",{"cx":"10","cy":"3","r":"0.5"}],["circle",{"cx":"10","cy":"6","r":"1"}],["circle",{"cx":"10","cy":"14","r":"1.5"}],["circle",{"cx":"10","cy":"10","r":"1.5"}],["circle",{"cx":"10","cy":"18","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDeblur;
