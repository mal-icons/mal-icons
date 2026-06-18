import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-microsoft-outlook-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhMicrosoftOutlookLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M88,96a32,32,0,1,0,32,32A32,32,0,0,0,88,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm128-40h-8V48a16,16,0,0,0-16-16H112A16,16,0,0,0,96,48V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V120A16,16,0,0,0,216,104ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,176V80h96v96H40Zm48,32V192h48a16,16,0,0,0,16-16v-2.13L199.26,208Zm128-7.65L165.66,164,216,127.65Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhMicrosoftOutlookLogo;
