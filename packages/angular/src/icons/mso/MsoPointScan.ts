import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-point-scan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPointScan {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.91-410Q451-410 430.5-430.59q-20.5-20.59-20.5-49.5Q410-509 430.59-529.5q20.59-20.5 49.5-20.5Q509-550 529.5-529.41q20.5 20.59 20.5 49.5Q550-451 529.41-430.5q-20.59 20.5-49.5 20.5ZM450-640v-200h60v200h-60Zm0 520v-200h60v200h-60Zm190-330v-60h200v60H640Zm-520 0v-60h200v60H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPointScan;
