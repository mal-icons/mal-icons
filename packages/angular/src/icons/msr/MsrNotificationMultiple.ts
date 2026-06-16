import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-notification-multiple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNotificationMultiple {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-120q-24 0-42-18t-18-42v-504q0-12.75 8.68-21.37Q67.35-714 80.18-714 93-714 101.5-705.37T110-684v504h535q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T645-120H110Zm413-321L230-638v338h620v-338L557-441q-7.65 5-17 5t-17-5ZM230-240q-24 0-42-18t-18-42v-392q0-19.22 10-36.61T204-755l336-206 72 37-43 48-29-12-301 187 301 199 301-199-44-27 46-46 33 19q20 11 27 27.75T910-692v392q0 24-18 42t-42 18H230Zm302-441 207-207q9-9 21-8.5t21 9.5q9 9 9 21.5t-9 21.5L553-616q-9 9-21 9t-21-9l-74-74q-9-9-8.5-21.5T438-733q9-9 21.5-9t21.5 9l51 52Zm8 381h310-620 310Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNotificationMultiple;
