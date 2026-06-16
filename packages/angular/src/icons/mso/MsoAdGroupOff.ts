import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-ad-group-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAdGroupOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m831-201-59-59h48v-500H272l-71-71q4-21 20.5-35t38.5-14h560q24.75 0 42.38 17.63T880-820v560q0 22-13.5 38.5T831-201Zm3 172L663-200H260q-24.75 0-42.37-17.62T200-260v-403L29-834l42-42L876-71l-42 42ZM260-260h343L260-603v343ZM140-80q-24.75 0-42.37-17.62T80-140v-620h60v620h620v60H140Zm293-349Zm86-84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAdGroupOff;
