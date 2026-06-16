import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-edit-road",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEditRoad {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M719-443v-357h60v297l-60 60ZM160-160v-640h60v640h-60Zm280-484v-156h60v156h-60Zm0 242v-156h60v156h-60Zm0 242v-156h60v156h-60Zm443-212-75-75 26.1-26.1q9.9-9.9 24.63-9.9 14.73 0 24.27 10l26.1 26.1q9.9 9.9 9.9 24.63 0 14.73-10 24.27l-26 26ZM596-160v-75l191-191 75 75-191 191h-75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEditRoad;
