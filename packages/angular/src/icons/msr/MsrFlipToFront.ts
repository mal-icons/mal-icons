import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flip-to-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlipToFront {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42h60v60Zm-60-144v-84h60v84h-60Zm0-168v-84h60v84h-60Zm0-167v-84h60v84h-60Zm144 479v-60h84v60h-84Zm60-144q-24 0-42-18t-18-42v-456q0-24 18-42t42-18h456q24 0 42 18t18 42v456q0 24-18 42t-42 18H324Zm0-60h456v-456H324v456Zm108 204v-60h84v60h-84Zm168 0v-60h84v60h-84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlipToFront;
