import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-brightness-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBrightnessUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Brightness Up"}],["path",{"d":"M12,17.5A5.5,5.5,0,1,1,17.5,12,5.51,5.51,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.51,4.51,0,0,0,12,7.5Z"}],["circle",{"cx":"12","cy":"3.06","r":"1"}],["circle",{"cx":"12","cy":"20.94","r":"1"}],["circle",{"cx":"20.94","cy":"12","r":"1"}],["circle",{"cx":"3.06","cy":"12","r":"1"}],["circle",{"cx":"18.32","cy":"5.68","r":"1"}],["circle",{"cx":"5.68","cy":"18.32","r":"1"}],["circle",{"cx":"18.32","cy":"18.32","r":"1"}],["circle",{"cx":"5.68","cy":"5.68","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBrightnessUp;
