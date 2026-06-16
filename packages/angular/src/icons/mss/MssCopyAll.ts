import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-copy-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCopyAll {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M264-224v-656h536v656H264Zm60-60h416v-536H324v536ZM120-392h60v-84h-60v84Zm0-168h60v-84h-60v84ZM432-80h84v-60h-84v60ZM120-224h60v-84h-60v84Zm0 144h60v-60h-60v60Zm144 0h84v-60h-84v60Zm336 0h60v-60h-60v60ZM120-728h60v-60h-60v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCopyAll;
