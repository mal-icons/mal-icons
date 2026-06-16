import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-local-shipping",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocalShipping {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M224.12-161Q175-161 140.5-195 106-229 106-279h-6q-24.75 0-42.37-17.62T40-339v-401q0-24 18-42t42-18h519q24.75 0 42.38 17.63T679-740v107h90q7.5 0 13.5 3t10.5 9l121 161q3 3.75 4.5 8.25T920-442v133q0 12.75-8.62 21.38T890-279h-41q0 50-34.38 84-34.38 34-83.5 34Q682-161 647.5-195 613-229 613-279H342q0 50-34.38 84-34.38 34-83.5 34ZM224-221q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100-740v401h22q17-27 43.04-43 26.04-16 58-16t58.46 16.5Q308-365 325-339h294v-401H100Zm631 519q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754-573h-75v148ZM360-540Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocalShipping;
