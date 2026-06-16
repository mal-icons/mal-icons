import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-outgoing-mail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoOutgoingMail {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m734-164-42-42 73-74H584v-60h181l-73-74 42-42 146 146-146 146ZM140-280q-24.75 0-42.37-17.62T80-340v-440q0-24.75 17.63-42.37T140-840h560q24.75 0 42.38 17.63T760-780v232q-7.5-1-15-1.5t-15-0.5q-8 0-15 0.5t-15 1.5v-185L416-532 140-732v392h351q-1 8-1 13.5v13.75q0 8.250.5 16.5T493-280H140Zm36-500 240 174 246-174H176Zm-36 440v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoOutgoingMail;
