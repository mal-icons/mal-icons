import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-solar-electricity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSolarElectricity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6.28v11.44a1 1 0 0 0 1.24 0.97l6 -1.5a1 1 0 0 0 0.76 -0.97v-8.44a1 1 0 0 0 -0.76 -0.97l-6 -1.5a1 1 0 0 0 -1.24 0.97"}],["path",{"d":"M8 6v12"}],["path",{"d":"M12 12h-8"}],["path",{"d":"M20 7l-3 5h4l-3 5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSolarElectricity;
