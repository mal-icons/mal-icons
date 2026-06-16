import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-phone-enabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPhoneEnabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M165-120q-19.29 0-32.14-12.86T120-165v-135q0-16 10-28t25-15l119-26q13-3 26 1.5t23 15.5l95 98q88-48 157.5-117T701-533L601-634q-8-8-10.5-19.5T590-679l27-126q3-16 13.69-25.5Q641.39-840 655-840h140q19.29 0 32.14 12.86T840-795q0 122-60 242.5T624-336q-96 96-216.5 156T165-120Zm566-468q25-60 37-106.5t12-85.5H673l-23 110 81 82ZM362-225l-79-83-103 21v107q45-2 93-14t89-31Zm369-363ZM362-225Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPhoneEnabled;
