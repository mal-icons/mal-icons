import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-send-to-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSendToBack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3C11.55 3 12 3.45 12 4V6H17C17.55 6 18 6.45 18 7V12H20C20.55 12 21 12.45 21 13V20C21 20.55 20.55 21 20 21H13C12.45 21 12 20.55 12 20V18H7C6.45 18 6 17.55 6 17V12H4C3.45 12 3 11.55 3 11V4C3 3.45 3.45 3 4 3H11ZM16 8H12V11C12 11.55 11.55 12 11 12H8V16H12V13C12 12.45 12.45 12 13 12H16V8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSendToBack;
