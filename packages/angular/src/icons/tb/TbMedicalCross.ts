import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-medical-cross",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMedicalCross {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 3a1 1 0 0 1 1 1v4.54l3.93 -2.27a1 1 0 0 1 1.37 0.37l1 1.73a1 1 0 0 1 -0.37 1.37l-3.93 2.27l3.93 2.27a1 1 0 0 1 0.37 1.37l-1 1.73a1 1 0 0 1 -1.37 0.37l-3.93 -2.27v4.54a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.54l-3.93 2.27a1 1 0 0 1 -1.37 -0.37l-1 -1.73a1 1 0 0 1 0.37 -1.37l3.93 -2.27l-3.93 -2.27a1 1 0 0 1 -0.37 -1.37l1 -1.73a1 1 0 0 1 1.37 -0.37l3.93 2.27v-4.53a1 1 0 0 1 1 -1h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMedicalCross;
