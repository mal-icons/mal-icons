import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-bubbles",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBubbles {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m398-628 145 145v-103h60v206H397v-60h104L356-585l42-43Zm372 468q-45 0-77.5-32.5t-32.5-78q0-45.5 32.5-77.5t78-32q45.5 0 77.5 32.08 32 32.08 32 77.92 0 45-32.08 77.5Q815.83-160 770-160Zm-630 0q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v300h-60v-300H140v520h460v60H140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBubbles;
