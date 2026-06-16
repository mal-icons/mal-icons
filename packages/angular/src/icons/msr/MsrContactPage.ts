import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-contact-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrContactPage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM740-80H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h316q12.09 0 23.04 4.5Q570-871 579-862l203 203q9 9 13.5 19.96Q800-628.09 800-616v476q0 24-18 42t-42 18Zm0-60v-474L534-820H220v680h520Zm-520 0v-680 680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrContactPage;
