import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-copy-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCopyAll {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-80q-24 0-42-18t-18-42h60v60Zm-60-144v-84h60v84h-60Zm0-168v-84h60v84h-60Zm0-168v-84h60v84h-60Zm0-168q0-24 18-42t42-18v60h-60ZM264-80v-60h84v60h-84Zm60-144q-24 0-42-18t-18-42v-536q0-24 18-42t42-18h416q24 0 42 18t18 42v536q0 24-18 42t-42 18H324Zm0-60h416v-536H324v536ZM432-80v-60h84v60h-84Zm168 0v-60h60q0 24-18 42t-42 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCopyAll;
