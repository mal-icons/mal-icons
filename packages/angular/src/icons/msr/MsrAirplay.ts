import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-airplay",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAirplay {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-260v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24.75-17.62 42.38T820-200H700v-60h120v-520H140v520h119v60H140q-24.75 0-42.37-17.62T80-260Zm400-230ZM312-158l147-147q9-9 21-9t21 9l147 147q11 11 5.21 24.5Q647.43-120 632-120l-304 1q-15.43 0-21.21-14Q301-147 312-158Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAirplay;
