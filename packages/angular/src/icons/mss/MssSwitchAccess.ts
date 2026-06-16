import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-switch-access",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSwitchAccess {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-279v-60h60v60h-60Zm0-330v-83h60v83h-60Zm159 489v-60h60v60h-60Zm0-660v-60h60v60h-60Zm341 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm160 501v-60h60v60h-60Zm-1-341v-60h60v60h-60ZM280-280v-399h400v399H280Zm60-60h280v-279H340v279Zm140-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSwitchAccess;
