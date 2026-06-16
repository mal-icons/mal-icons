import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-comic-bubble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrComicBubble {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M754-206 646-415l105-105-91.21-91.21v-128.58H531.21L440-831l-91.21 91.21H220.21v128.58L129-520l91.21 91.21v128.58h128.58L440-209l104-104 210 107Zm90 90q-7 7-16 8.5t-19-3.5L556-240l-95 95q-9 9-21 9t-21-9l-95.06-95H190q-12.75 0-21.37-8.62T160-270v-133.94L65-499q-9-9-9-21t9-21l95-95.06V-770q0-12.75 8.63-21.37T190-800h133.94L419-895q9-9 21-9t21 9l95.06 95H690q12.75 0 21.38 8.63T720-770v133.94L815-541q9 9 9 21t-9 21l-95 95 129 253q5 10 3.5 19t-8.5 16ZM441-518Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrComicBubble;
