import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-splitscreen-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSplitscreenTop {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-510q-24 0-42-18t-18-42v-210q0-24 18-42t42-18h600q24 0 42 18t18 42v210q0 24-18 42t-42 18H180Zm0 390q-24 0-42-18t-18-42v-210q0-24 18-42t42-18h600q24 0 42 18t18 42v210q0 24-18 42t-42 18H180Zm0-60h600v-210H180v210Zm0-210v210-210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSplitscreenTop;
