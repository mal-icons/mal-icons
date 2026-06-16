import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-blinds",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBlinds {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-120v-60h80v-660h640v660h80v60H80Zm140-555h355v-105H220v105Zm0 165h355v-105H220v105Zm0 330h520v-270H635v88q14 8 22 21.5t8 30.5q0 24.86-17.6 42.43Q629.8-250 604.9-250T562.5-267.57Q545-285.14 545-310q0-17 8-30.5t22-21.5v-88H220v270Zm415-495h105v-105H635v105Zm0 165h105v-105H635v105Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBlinds;
