import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-night-sight-max",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNightSightMax {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M690-530v-120H570v-60h120v-120h60v120h120v60H750v120h-60ZM440.25-190Q496-190 548-216.5t93-73.5q-130.62-7.75-220.81-96.37Q330-475 330-600q0-12 1.5-29t6.5-40q-66 37-107 97.5T190-440q0 103 73.5 176.5T440.25-190ZM440-130q-129 0-219.5-90.5T130-440q0-129 90.5-219.5T440-750q-23 27-36.5 66.5T390-600q0 103 73.5 176.5T640-350q28.09 0 53.54-5.5Q719-361 742-372q-23 104-106.5 173T440-130Zm-19-257Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNightSightMax;
