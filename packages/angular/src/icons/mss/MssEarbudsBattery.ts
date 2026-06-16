import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-earbuds-battery",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEarbudsBattery {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M659-240v-447h78v-33h60v33h83v447H659Zm60-60h101-101Zm-509 59q-54 0-92-36.11T80-366v-354h140v140H120v214q0 36.27 26.5 60.63Q173-281 210-281t63.5-24.37Q300-329.73 300-366v-229q0-52.78 38-88.89T430-720q54 0 92 36.11T560-595v354H420v-140h100v-214q0-36.27-26.5-60.63Q467-680 430-680t-63.5 24.37Q340-631.27 340-595v229q0 52.78-38 88.89T210-241Zm509-59h101v-327H719v327Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEarbudsBattery;
