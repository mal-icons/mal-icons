import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mastercomfig",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMastercomfig {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.48 0 0.17 5.30.17 11.83V24h1.34v-6.72C3.49 21.06 7.45 23.65 12 23.65c4.55 0 8.51-2.59 10.49-6.37V24h1.34V11.83h-1.34c0 5.8-4.69 10.49-10.49 10.49-5.8 0-10.49-4.69-10.49-10.49C1.51 6.03 6.2 1.34 12 1.34zm0 3.72a8.11 8.11 0 100 16.21 8.11 8.11 0 0-16.21zm0 1.34a6.77 6.77 0 110 13.54 6.77 6.77 0 10-13.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMastercomfig;
