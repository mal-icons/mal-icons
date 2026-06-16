import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-call-missed-outgoing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCallMissedOutgoing {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M474.87-278Q469-278 464-280q-5-2-10-7L140-601q-9-9-9-21t9-21.12q8.25-9.12 20.63-9.5Q173-653 182-644l293 293 267-267H560q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T560-678h251q12.75 0 21.38 8.63T841-648v258q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T781-390v-182L496-287q-5 5-10.13 7-5.13 2-11 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCallMissedOutgoing;
