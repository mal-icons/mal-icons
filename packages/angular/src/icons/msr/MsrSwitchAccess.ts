import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-switch-access",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSwitchAccess {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-279v-60h60v60h-60Zm0-330v-83h60v83h-60Zm159 489v-60h60v60h-60Zm0-660v-60h60v60h-60Zm341 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm160 501v-60h60v60h-60Zm-1-341v-60h60v60h-60ZM340-280q-24 0-42-18t-18-42v-279q0-24 18-42t42-18h280q24 0 42 18t18 42v279q0 24-18 42t-42 18H340Zm0-60h280v-279H340v279Zm140-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSwitchAccess;
