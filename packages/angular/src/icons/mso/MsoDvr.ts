import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-dvr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDvr {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M279.98-407q14.02 0 23.52-9.48 9.5-9.48 9.5-23.5 0-14.02-9.48-23.52-9.48-9.5-23.5-9.5-14.02 0-23.52 9.48-9.5 9.48-9.5 23.5 0 14.02 9.48 23.52 9.48 9.5 23.5 9.5Zm0-160q14.02 0 23.52-9.48 9.5-9.48 9.5-23.5 0-14.02-9.48-23.52-9.48-9.5-23.5-9.5-14.02 0-23.52 9.48-9.5 9.48-9.5 23.5 0 14.02 9.48 23.52 9.48 9.5 23.5 9.5ZM360-410h360v-60H360v60Zm0-160h360v-60H360v60Zm-30 450v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDvr;
