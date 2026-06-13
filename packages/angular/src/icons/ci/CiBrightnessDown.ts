import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-brightness-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBrightnessDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Brightness Down"}],["path",{"d":"M12,17.5A5.5,5.5,0,1,1,17.5,12,5.51,5.51,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.51,4.51,0,0,0,12,7.5Z"}],["circle",{"cx":"12","cy":"2.81","r":"0.75"}],["circle",{"cx":"12","cy":"21.19","r":"0.75"}],["circle",{"cx":"21.19","cy":"12","r":"0.75"}],["circle",{"cx":"2.81","cy":"12","r":"0.75"}],["circle",{"cx":"18.5","cy":"5.5","r":"0.75"}],["circle",{"cx":"5.5","cy":"18.5","r":"0.75"}],["circle",{"cx":"18.5","cy":"18.5","r":"0.75"}],["circle",{"cx":"5.5","cy":"5.5","r":"0.75"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBrightnessDown;
