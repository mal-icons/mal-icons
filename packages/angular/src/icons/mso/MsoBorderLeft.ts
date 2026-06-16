import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-border-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBorderLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h60v720h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM450-285v-60h60v60h-60Zm330 0v-60h60v60h-60ZM285-450v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM450-615v-60h60v60h-60Zm330 0v-60h60v60h-60ZM285-780v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBorderLeft;
