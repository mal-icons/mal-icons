import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-picture-as-pdf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPictureAsPdf {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M331-431h37v-83h48q15.73 0 26.36-10.64Q453-535.27 453-551v-48q0-15.72-10.64-26.36Q431.73-636 416-636h-85v205Zm37-120v-48h48v48h-48Zm129 120h84q15 0 26-10.64 11-10.64 11-26.36v-131q0-15.72-11-26.36Q596-636 581-636h-84v205Zm37-37v-131h47v131h-47Zm133 37h37v-83h50v-37h-50v-48h50v-37h-87v205ZM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPictureAsPdf;
