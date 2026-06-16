import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-photo-size-select-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPhotoSizeSelectSmall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-342h342q24.75 0 42.38 17.63T522-462v342H180Zm-60-489v-83h60v83h-60Zm0-171q0-24 18-42t42-18v60h-60Zm73 573h259q10 0 14-8t-2-16l-74-98q-5-6-12-6.5t-12 5.5l-65 83-44-56q-5-6-12-5.5t-12 6.5l-52 71q-5 8-0.92 16t12.92 8Zm75-573v-60h83v60h-83Zm171 0v-60h83v60h-83Zm170 660v-60h83v60h-83Zm0-660v-60h83v60h-83Zm171 660v-60h60q0 24-18 42t-42 18Zm0-148v-83h60v83h-60Zm0-171v-83h60v83h-60Zm0-170v-83h60v83h-60Zm0-171v-60q24 0 42 18t18 42h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPhotoSizeSelectSmall;
