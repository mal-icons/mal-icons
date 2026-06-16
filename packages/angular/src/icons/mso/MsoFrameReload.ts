import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-frame-reload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFrameReload {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-172h60v172h172v60H180Zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18H608ZM120-608v-172q0-24 18-42t42-18h172v60H180v172h-60Zm660 0v-172H608v-60h172q24 0 42 18t18 42v172h-60ZM480-280q-73 0-127.5-45.5T284-440h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T382-580h58v60H280v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFrameReload;
