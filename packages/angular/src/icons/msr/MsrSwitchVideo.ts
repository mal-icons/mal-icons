import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-switch-video",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSwitchVideo {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256-367q8 8 19.5 7.5t19.85-8.85Q303-376 303-388.09q0-12.09-8-19.91l-45-45h300l-46 46q-8 8-7.5 19.5t8.85 19.85Q513-360 525.09-360q12.09 0 19.91-8l94-94q5-5 7-10.13 2-5.13 2-11Q648-489 646-494q-2-5-7-10l-95-95q-8-8-19.5-7.5t-19.85 8.85Q497-590 497-577.91q0 12.09 8 19.91l45 45H250l46-46q8-8 7.5-19.5t-8.85-19.85Q287-606 274.91-606q-12.09 0-19.91 8l-94 94q-5 5-7 10.13-2 5.13-2 11Q152-477 154-472q2 5 7 10l95 95ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v215l134-134q8-8 17-4t9 14v338q0 10-9 14t-17-4L720-435v215q0 24-18 42t-42 18H140Zm0-60h520v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSwitchVideo;
