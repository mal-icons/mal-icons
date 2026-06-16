import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-thermostat-carbon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrThermostatCarbon {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-71q-11 0-21.96-4.43Q447.07-79.87 438-88L88-438q-8.13-9.07-12.56-20.04Q71-469 71-480q0-11 4.43-22.34Q79.87-513.68 88-522l350-350q9.07-8.87 20.04-12.93Q469-889 480-889q11 0 22.34 4.07Q513.68-880.87 522-872l350 350q8.87 8.32 12.94 19.66Q889-491 889-480q0 11-4.07 21.96Q880.87-447.07 872-438L522-88q-8.32 8.13-19.66 12.57Q491-71 480-71Zm0-60 349-349-349-349-349 349 349 349Zm0-349Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrThermostatCarbon;
