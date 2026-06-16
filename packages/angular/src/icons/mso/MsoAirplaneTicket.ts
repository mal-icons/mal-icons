import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-airplane-ticket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAirplaneTicket {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m348-325 368-101q17-5 25-16t3-28q-5-17-18-23.5t-28.8-2.37L594-469 428-631l-52 12 103 181-111 31-52-43-29 10 61 115Zm472 165H140q-24.75 0-42.37-17.62T80-220v-153q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-153q0-24.75 17.63-42.37T140-800h680q24.75 0 42.38 17.63T880-740v520q0 24.75-17.62 42.38T820-160Zm0-60v-520H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329v109h680ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAirplaneTicket;
