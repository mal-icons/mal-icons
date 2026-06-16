import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-mark-email-read",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMarkEmailRead {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M632.87-92Q627-92 622-94q-5-2-10-7L493-220q-9-9-8.5-21.5T494-263q9-9 21.5-9t21.5 9l96 97 223-223q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L654-101q-5 5-10.13 7-5.13 2-11 2ZM144-740l334 213 334-213H144Zm-4 568q-24 0-42-18t-18-42v-508q0-24 18-42t42-18h677q24 0 42 18t18 42v244l-30 30-30 30v-248L494-477q-4 2-7.5 3t-8.5 1q-5 0-8.5-1t-7.5-3L140-684v452h256l60 60H140Zm339-256Zm-1-99Zm1 56Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMarkEmailRead;
