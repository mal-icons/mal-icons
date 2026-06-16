import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-center-focus-weak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCenterFocusWeak {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-337q-63 0-103-40t-40-103q0-63 40-103t103-40q63 0 103 40t40 103q0 63-40 103t-103 40Zm0-143Zm0 83q35 0 59-24t24-59q0-35-24-59t-59-24q-35 0-59 24t-24 59q0 35 24 59t59 24ZM120-608v-232h232v60H180v172h-60Zm232 488H120v-232h60v172h172v60Zm256 0v-60h172v-172h60v232H608Zm172-488v-172H608v-60h232v232h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCenterFocusWeak;
