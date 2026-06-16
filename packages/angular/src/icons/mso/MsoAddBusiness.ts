import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-add-business",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAddBusiness {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M726-40v-121H606v-60h120v-120h60v120h120v60H786v121h-60ZM104-161v-257H54v-60l44-202h602l45 207v55h-49v167h-60v-167H420v257H104Zm60-60h196v-197H164v197Zm-50-257h572-572ZM98-740v-60h603v60H98Zm16 262h572l-31-142H145l-31 142Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAddBusiness;
