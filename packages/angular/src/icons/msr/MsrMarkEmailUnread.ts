import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-mark-email-unread",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMarkEmailUnread {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h434q-3 15-4 30t1 30H140v520h680v-360q16.79-4.78 31.4-13.39Q866-602 880-613v393q0 24-18 42t-42 18H140Zm0-580v520-520Zm619.88 90Q714-650 682-682.12q-32-32.12-32-78Q650-806 682.12-838q32.12-32 78-32Q806-870 838-837.88q32 32.12 32 78Q870-714 837.88-682q-32.12 32-78 32ZM480-522l151-98q10 9 21 16.67 11 7.67 23 13.33L496-473q-7.5 5-15.75 5T464-473L140-681v-59l340 218Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMarkEmailUnread;
