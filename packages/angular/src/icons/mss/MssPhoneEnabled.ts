import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-phone-enabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhoneEnabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M165-120q-11 0-23-1t-22-2v-212l181-40 117 121q88-48 157.5-117T701-533L584-651l40-189h212q2 10 3 22t1 23q0 122-60 243T624-335q-96 96-216.5 155.5T165-120Zm566-468q25-60 37-106.5t12-85.5H673l-23 110 81 82ZM362-225l-79-83-103 21v107q45-2 93-14t89-31Zm369-363ZM362-225Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhoneEnabled;
