import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-stack-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStackStar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m600-293 68 41q5 2 9-0.5t3-7.5l-18-78 60-52q4-3 2-7.5t-7-5.5l-79-7-31-74q-1.5-5-6.75-5t-7.25 5l-31 74-79 7q-5 1-7 5.5t2 7.5l60 52-18 78q-1 5 3 7.5t9 0.5l68-41Zm-460-27q-24.75 0-42.37-17.62T80-380v-440q0-24.75 17.63-42.37T140-880h440q24.75 0 42.38 17.63T640-820v90q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T580-730v-90H140v440h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T230-320h-90ZM380-80q-24.75 0-42.37-17.62T320-140v-440q0-24.75 17.63-42.37T380-640h440q24.75 0 42.38 17.63T880-580v440q0 24.75-17.62 42.38T820-80H380Zm0-60h440v-440H380v440Zm220-220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStackStar;
