import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-physical-therapy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPhysicalTherapy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M483-275ZM598-75l-216-85H150q-12.75 0-21.37-8.62T120-190v-130q0-83 58.5-141.5T320-520h429q38 0 64.5 26t26.5 64q0 31-19 55.5T773-342l-93 27v184q0 15.91-7.06 28.79T654-81q-12.15 8.25-26.57 10.13Q613-69 598-75Zm-99.96-225H375q-14 0-23 9t-11 20q-2 11 3.68 22.46Q350.36-237.09 364-232l256 101v-169H498.04ZM180-220h113q-6-10-9.5-21.5T280-265q0-39 28-67t67-28h238l145-40q14-4 19-13t3-20q-2-11-10-19t-21-8H320q-58.33 0-99.17 40.83Q180-378.33 180-320v100Zm303-55Zm-83-285q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPhysicalTherapy;
