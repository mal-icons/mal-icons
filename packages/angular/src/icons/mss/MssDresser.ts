import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-dresser",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDresser {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-120v-660q0-24.75 17.63-42.37T220-840h520q24.75 0 42.38 17.63T800-780v660h-60v-80H220v80h-60Zm60-400h230v-260H220v260Zm290-160h230v-100H510v100Zm0 160h230v-100H510v100ZM410-330h140v-60H410v60ZM220-460v200h520v-200H220Zm0 0v200-200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDresser;
