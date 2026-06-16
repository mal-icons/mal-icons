import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-bathtub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBathtub {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M273.08-599q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5ZM185.83-80Q168-80 154-91.5T140-120q-24.75 0-42.37-17.62T80-180v-260h120v-27.79Q200-503 225-528t60.38-25Q304-553 321-546q17 7 30 21l52 59q7 8 14.5 14.5T433-440h287v-334q0-18.94-12.5-32.47Q695-820 676-820q-9.88 0-18.94 2T641-809l-52 52q5 17 1.5 34.5T578-689l-102-97q16.43-10.93 35.22-13.96Q530-803 548-796l52-51q15-15 34.54-24T676-880q43.79 0 73.9 31Q780-818 780-774v334h100v260q0 24.75-17.62 42.38T820-120q0 17-14 28.5T773-80H185.83ZM140-180h680v-200H140v200Zm680 0H140h680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBathtub;
