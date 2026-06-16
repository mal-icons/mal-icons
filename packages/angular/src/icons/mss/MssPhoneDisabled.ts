import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-phone-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhoneDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M730-588q20-46 35-99.5t14-92.5H672l-23 110 81 82ZM179-180q45-2 93-14t89-31l-79-83-103 21v107Zm484-197-43-43q20-24 36-46.5t44-66.5L583-651l40-189h212q2 8 3 21t1 24q1 102-47 214.5T663-377ZM172-120q-17 0-30.5-1t-22.5-2v-212l181-40 117 121q20-9 47.5-28t70.5-52L64-806l43-43L856-99l-43 42-235-234q-107 87-209.5 129T172-120Zm558-468ZM361-225Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhoneDisabled;
