import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-inquirer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiInquirer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.13 7.14v-0.99h0.99v-0.99h5.75v0.99h0.79v0.99h0.99v2.78h-0.99v0.99h-0.79v0.99h-0.99v0.99h-0.99v2.98h-1.79V12.1h0.99v-0.99h0.99v-0.99h0.99v-0.99h0.99v-1.19h-0.99v-0.99H9.92v0.99h-0.99v1.98H7.14V7.14Zm-2.58-0.2H1.59v10.12h3.97v1.79H0V5.16h5.55zm12.89 0h3.97v10.12h-3.97v1.79H24V5.16h-5.55zm-7.34 10.12h1.79v1.79h-1.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiInquirer;
